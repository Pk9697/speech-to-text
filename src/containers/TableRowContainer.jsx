import { useContext } from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import Table from '../components/table'
import { TranscribeContext } from '../context/transcribeContext'

function TableRowContainer({ item: { file, text = '', dateCreated } }) {
  const { name, type, size } = file
  const data = new Blob([text], { type: 'text/plain' })
  const downloadLink = window.URL.createObjectURL(data)
  const { incSaved } = useContext(TranscribeContext)

  return (
    <Table.Row>
      <Table.Cell>
        <Table.CheckBox />
      </Table.Cell>
      <Table.Cell>
        <Table.Text>{name.split(' ')[0]}</Table.Text>
      </Table.Cell>
      <Table.Cell>
        <Table.Text>{type}</Table.Text>
      </Table.Cell>
      <Table.Cell>
        <Table.Text>{size}</Table.Text>
      </Table.Cell>
      <Table.Cell>
        <Table.Text>{dateCreated}</Table.Text>
      </Table.Cell>
      <Table.Cell>
        <Table.Text>{dateCreated}</Table.Text>
      </Table.Cell>
      <Table.Cell>
        <Table.Link
          download={`${name.split(' ')[0]}.txt`}
          target="_blank"
          rel="noreferrer"
          href={downloadLink}
          onClick={incSaved}
        >
          <FileDownloadOutlinedIcon />
        </Table.Link>
      </Table.Cell>
    </Table.Row>
  )
}

export default TableRowContainer
