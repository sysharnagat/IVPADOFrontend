import './App.css'
import HighChartsBarChart from './components/burnupChart/HighChartsBarChart'
import SpillageProvider from './context/SpillageProvider'

function App() {
  return (
    <>
      <SpillageProvider>
        <h1>ADO Dashboard Performance</h1>
        <HighChartsBarChart/>
      </SpillageProvider>
    </>
  )
}

export default App
