
import './App.css'
import HighChartsBarChart from './components/burnupChart/HighChartsBarChart'
import SpillageProvider from './context/SpillageProvider'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <>
      <SpillageProvider>
        <h1>ADO Dashboard Performance</h1>
        <DashboardPage/>
      </SpillageProvider>
    </>
  )
}

export default App
