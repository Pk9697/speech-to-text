import SidePaneContainer from '../containers/SidePaneContainer'
import SplitScreen from '../layoutComponents/splitScreen'

function Home() {
  return (
    <SplitScreen>
      <SplitScreen.Pane $weight={1}>
        <SidePaneContainer />
      </SplitScreen.Pane>
      <SplitScreen.Pane $weight={3}>
        <h1>Main</h1>
      </SplitScreen.Pane>
    </SplitScreen>
  )
}

export default Home
