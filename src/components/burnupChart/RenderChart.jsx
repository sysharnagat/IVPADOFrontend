import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import React from 'react'

const RenderChart = ({title, statsArray, barColor}) => {
  const getNumericValue = (obj, keys) => {
      for (const k of keys) {
        let v = obj?.[k]
        if (v === undefined || v === null) continue
        const n = typeof v === 'string' ? Number(v.replace(/[,\s]/g, '')) : v
        if (!Number.isNaN(n)) return n
      }
      return 0
    }
  
    // Map the specific stats array (e.g., data.All.stats)
    const sprintNames = statsArray.map(item => 
      item.iterationPath?.split('\\').pop() || item.name || 'Sprint'
    )
  
    const assignedData = statsArray.map(item =>
      getNumericValue(item, ['totalPointsAssigned', 'assignedPoints', 'assigned'])
    )
  
    const completedData = statsArray.map(item =>
      getNumericValue(item, ['totalPointsCompleted', 'completedPoints', 'completed'])
    )
  
    const options = {
      chart: { type: 'column' },
      title: { text: title },
      xAxis: { categories: sprintNames },
      yAxis: { title: { text: 'Story Points' } },
      series: [
        { name: 'Assigned Points', data: assignedData, color: barColor },
        { name: 'Completed Points', data: completedData, color: '#82ca9d' }
      ],
      credits: { enabled: false }
    }
  
    return (
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
         <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    )
}

export default RenderChart