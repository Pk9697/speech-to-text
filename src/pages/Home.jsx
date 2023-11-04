import MainPaneContainer from '../containers/MainPaneContainer'
import SidePaneContainer from '../containers/SidePaneContainer'
import TranscribeContainer from '../containers/TranscribeContainer'
import Modal from '../layoutComponents/modal'
import SplitScreen from '../layoutComponents/splitScreen'

function Home() {
  return (
    <>
      <SplitScreen>
        <SplitScreen.Pane $maxWidth="272px" $weight={1}>
          <SidePaneContainer />
        </SplitScreen.Pane>
        <SplitScreen.Pane $weight={3}>
          <MainPaneContainer />
        </SplitScreen.Pane>
      </SplitScreen>
      <Modal>
        <TranscribeContainer />
      </Modal>
    </>
  )
}

export default Home
