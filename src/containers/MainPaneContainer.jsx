import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'

import MainPane from '../components/mainPane'
import Button from '../components/button'
import TableContainer from './TableContainer'

function MainPaneContainer() {
  return (
    <MainPane>
      <MainPane.Frame>
        <MainPane.TitleContainer>Welcome Shakirat</MainPane.TitleContainer>
        <Button $maxWidth="175px">Transcribe File</Button>
      </MainPane.Frame>
      <MainPane.Frame>
        <MainPane.Metrics>
          <MainPane.MetricsIcon>
            <FolderOutlinedIcon fontSize="small" />
          </MainPane.MetricsIcon>
          <MainPane.MetricsGroup>
            <MainPane.MetricsNumber>100</MainPane.MetricsNumber>
            <MainPane.MetricsText>Uploaded Files</MainPane.MetricsText>
          </MainPane.MetricsGroup>
        </MainPane.Metrics>
        <MainPane.Metrics>
          <MainPane.MetricsIcon>
            <TitleOutlinedIcon fontSize="small" />
          </MainPane.MetricsIcon>
          <MainPane.MetricsGroup>
            <MainPane.MetricsNumber>50</MainPane.MetricsNumber>
            <MainPane.MetricsText>Transcribed</MainPane.MetricsText>
          </MainPane.MetricsGroup>
        </MainPane.Metrics>
        <MainPane.Metrics>
          <MainPane.MetricsIcon>
            <BookmarkBorderOutlinedIcon fontSize="small" />
          </MainPane.MetricsIcon>
          <MainPane.MetricsGroup>
            <MainPane.MetricsNumber>20</MainPane.MetricsNumber>
            <MainPane.MetricsText>Saved</MainPane.MetricsText>
          </MainPane.MetricsGroup>
        </MainPane.Metrics>
      </MainPane.Frame>
      <MainPane.Frame>
        <TableContainer />
      </MainPane.Frame>
    </MainPane>
  )
}

export default MainPaneContainer
