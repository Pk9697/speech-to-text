import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import Button from '../components/button'
import SidePane from '../components/sidePane'

function SidePaneContainer() {
  return (
    <SidePane>
      <SidePane.Section>
        {/* <SidePane.Logo>abc firm</SidePane.Logo> */}
        <SidePane.Menu>
          <SidePane.MenuItem $selected>
            <SidePane.Icon>
              <HomeOutlinedIcon fontSize="small" />
            </SidePane.Icon>
            <SidePane.Text $bold>Home</SidePane.Text>
          </SidePane.MenuItem>
          <SidePane.MenuItem>
            <SidePane.Icon>
              <FolderOutlinedIcon fontSize="small" />
            </SidePane.Icon>
            <SidePane.Text>All Files</SidePane.Text>
          </SidePane.MenuItem>
          <SidePane.MenuItem>
            <SidePane.Icon>
              <BookmarkBorderOutlinedIcon fontSize="small" />
            </SidePane.Icon>
            <SidePane.Text>Saved</SidePane.Text>
          </SidePane.MenuItem>
          <SidePane.MenuItem>
            <SidePane.Icon>
              <ShareOutlinedIcon fontSize="small" />
            </SidePane.Icon>
            <SidePane.Text>Integrations</SidePane.Text>
          </SidePane.MenuItem>
          <SidePane.MenuItem>
            <SidePane.Icon>
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </SidePane.Icon>
            <SidePane.Text>Trash</SidePane.Text>
          </SidePane.MenuItem>
          <SidePane.MenuItem>
            <SidePane.Icon>
              <SettingsOutlinedIcon fontSize="small" />
            </SidePane.Icon>
            <SidePane.Text>Settings</SidePane.Text>
          </SidePane.MenuItem>
          <SidePane.MenuItem>
            <SidePane.Icon>
              <HelpOutlineOutlinedIcon fontSize="small" />
            </SidePane.Icon>
            <SidePane.Text>Help and Support</SidePane.Text>
          </SidePane.MenuItem>
        </SidePane.Menu>
      </SidePane.Section>
      <SidePane.Section>
        <SidePane.Upgrade>
          <SidePane.Icon $colorBlue>
            <RocketLaunchOutlinedIcon />
          </SidePane.Icon>
          <SidePane.Text $bold>Upgrade Account</SidePane.Text>
          <SidePane.TextSmall>
            Access to Unlimited Transcription
          </SidePane.TextSmall>
          <Button>Upgrade</Button>
        </SidePane.Upgrade>
      </SidePane.Section>
    </SidePane>
  )
}

export default SidePaneContainer
