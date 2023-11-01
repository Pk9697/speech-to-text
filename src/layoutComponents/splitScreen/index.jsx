import { Container, Pane } from './styles/splitScreen'

function SplitScreen({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

SplitScreen.Pane = function SplitScreenPane({
  children,
  $weight = 1,
  ...restProps
}) {
  return (
    <Pane $weight={$weight} {...restProps}>
      {children}
    </Pane>
  )
}

export default SplitScreen
