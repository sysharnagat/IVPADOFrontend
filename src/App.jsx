import './App.css'
import BurnUpChart from './components/burnupChart/BurnUpChart'
// import MuiSprintVelocityChart from './components/burnupChart/MuiSprintVelocityChart'
import SpillageProvider from './context/SpillageProvider'

function App() {
  return (
    <>
      <SpillageProvider>
        ADO Dashboard Performance
        <BurnUpChart/>
        {/* <MuiSprintVelocityChart/> */}
      </SpillageProvider>
    </>
  )
}

export default App
