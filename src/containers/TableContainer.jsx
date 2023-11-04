import { useContext } from 'react'
import Table from '../components/table'
import { TranscribeContext } from '../context/transcribeContext'
import TableRowContainer from './TableRowContainer'

function TableContainer() {
  const {
    transcribeState: { transcribedFiles = [] },
  } = useContext(TranscribeContext)
  // console.log({ transcribeState })

  return (
    <Table>
      <Table.Title>Recent Files</Table.Title>
      <Table.Divider />
      <Table.RowGroup>
        <Table.Row $selected>
          <Table.Cell>
            <Table.CheckBox />
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Name</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Type</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Duration</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Date Created</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Last Updated</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Action</Table.Text>
          </Table.Cell>
        </Table.Row>

        {transcribedFiles.map((item, index) => (
          <TableRowContainer key={`row-${index}`} item={item} />
        ))}
      </Table.RowGroup>
    </Table>
  )
}

export default TableContainer
