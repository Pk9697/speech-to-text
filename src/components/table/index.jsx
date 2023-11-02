import {
  Cell,
  CheckBox,
  Container,
  Divider,
  Row,
  RowGroup,
  Text,
  Title,
} from './styles/table'

function Table({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Table.Title = function TableTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Table.Divider = function TableDivider({ ...restProps }) {
  return <Divider {...restProps} />
}

Table.RowGroup = function TableRowGroup({ children, ...restProps }) {
  return <RowGroup {...restProps}>{children}</RowGroup>
}

Table.Row = function TableRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}

Table.Cell = function TableCell({ children, ...restProps }) {
  return <Cell {...restProps}>{children}</Cell>
}

Table.CheckBox = function TableCheckBox({ ...restProps }) {
  return <CheckBox type="checkbox" {...restProps} />
}

Table.Text = function TableText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

export default Table
