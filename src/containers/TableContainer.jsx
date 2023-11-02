import Table from '../components/table'

function TableContainer() {
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
        <Table.Row>
          <Table.Cell>
            <Table.CheckBox />
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Peng Meeting</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Audio</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>20 min</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>1/5/2023</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>5/5/2023</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Download</Table.Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Table.CheckBox />
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Peng Meeting</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Audio</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>20 min</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>1/5/2023</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>5/5/2023</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Download</Table.Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Table.CheckBox />
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Peng Meeting</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Audio</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>20 min</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>1/5/2023</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>5/5/2023</Table.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Text>Download</Table.Text>
          </Table.Cell>
        </Table.Row>
      </Table.RowGroup>
    </Table>
  )
}

export default TableContainer
