import { Container } from './styles/mainPane'

function MainPane({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

export default MainPane
