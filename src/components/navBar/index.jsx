import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import {
  Avatar,
  AvatarImage,
  Container,
  Icon,
  Search,
  SearchIcon,
  SearchInput,
  LogoContainer,
  Logo,
} from './styles/navBar'

function NavBar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

NavBar.Logo = function NavBarLogo({ children, ...restProps }) {
  return (
    <LogoContainer>
      <Logo {...restProps}>{children}</Logo>
    </LogoContainer>
  )
}

NavBar.Search = function NavBarSearch({ ...restProps }) {
  return (
    <Search {...restProps}>
      <SearchIcon>
        <SearchOutlinedIcon fontSize="small" />
      </SearchIcon>
      <SearchInput placeholder="Search here..." />
    </Search>
  )
}

NavBar.Icon = function NavBarIcon({ ...restProps }) {
  return (
    <Icon {...restProps}>
      <NotificationsNoneOutlinedIcon fontSize="small" />
    </Icon>
  )
}

NavBar.Avatar = function NavBarAvatar({ src, alt, ...restProps }) {
  return (
    <Avatar {...restProps}>
      <AvatarImage src={src} alt={alt} />
    </Avatar>
  )
}

export default NavBar
