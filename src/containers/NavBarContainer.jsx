import NavBar from '../components/navBar'
import AVATAR from '../assets/user-avatar-image2.png'

function NavBarContainer() {
  return (
    <NavBar>
      <NavBar.Logo>abc firm</NavBar.Logo>
      <NavBar.Search />
      <NavBar.Icon />
      <NavBar.Avatar src={AVATAR} alt="user-avatar" />
    </NavBar>
  )
}

export default NavBarContainer
