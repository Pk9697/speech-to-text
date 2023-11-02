import MainPaneContainer from '../containers/MainPaneContainer'
import SidePaneContainer from '../containers/SidePaneContainer'
import SplitScreen from '../layoutComponents/splitScreen'

function Home() {
  return (
    <SplitScreen>
      <SplitScreen.Pane $weight={1}>
        <SidePaneContainer />
      </SplitScreen.Pane>
      <SplitScreen.Pane $weight={3}>
        <MainPaneContainer />
      </SplitScreen.Pane>
    </SplitScreen>
  )
}

export default Home
