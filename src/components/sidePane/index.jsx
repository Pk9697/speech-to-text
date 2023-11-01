import {
  Container,
  Icon,
  Logo,
  LogoContainer,
  Menu,
  MenuItem,
  Section,
  Text,
  TextSmall,
  Upgrade,
} from './styles/sidepane'

function SidePane({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

SidePane.Section = function SidePaneSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>
}

SidePane.Logo = function SidePaneLogo({ children, ...restProps }) {
  return (
    <LogoContainer>
      <Logo {...restProps}>{children}</Logo>
    </LogoContainer>
  )
}

SidePane.Menu = function SidePaneMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>
}

SidePane.MenuItem = function SidePaneMenuItem({ children, ...restProps }) {
  return <MenuItem {...restProps}>{children}</MenuItem>
}

SidePane.Icon = function SidePaneIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>
}

SidePane.Text = function SidePaneText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

SidePane.TextSmall = function SidePaneTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>
}

SidePane.Upgrade = function SidePaneUpgrade({ children, ...restProps }) {
  return <Upgrade {...restProps}>{children}</Upgrade>
}

export default SidePane
