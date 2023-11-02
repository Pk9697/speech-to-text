import {
  Container,
  Frame,
  Metrics,
  MetricsGroup,
  MetricsIcon,
  MetricsNumber,
  MetricsText,
  Text,
  Title,
  TitleContainer,
} from './styles/mainPane'

function MainPane({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

MainPane.Frame = function MainPaneFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

MainPane.TitleContainer = function MainPaneTitleContainer({
  children,
  ...restProps
}) {
  return (
    <TitleContainer {...restProps}>
      <Title>{children}</Title>
      <Text>Upload your audio and video to convert to text</Text>
    </TitleContainer>
  )
}

MainPane.Metrics = function MainPaneMetrics({ children, ...restProps }) {
  return <Metrics {...restProps}>{children}</Metrics>
}

MainPane.MetricsIcon = function MainPaneMetricsIcon({
  children,
  ...restProps
}) {
  return <MetricsIcon {...restProps}>{children}</MetricsIcon>
}

MainPane.MetricsGroup = function MainPaneMetricsGroup({
  children,
  ...restProps
}) {
  return <MetricsGroup {...restProps}>{children}</MetricsGroup>
}

MainPane.MetricsNumber = function MainPaneMetricsNumber({
  children,
  ...restProps
}) {
  return <MetricsNumber {...restProps}>{children}</MetricsNumber>
}

MainPane.MetricsText = function MainPaneMetricsText({
  children,
  ...restProps
}) {
  return <MetricsText {...restProps}>{children}</MetricsText>
}

export default MainPane
