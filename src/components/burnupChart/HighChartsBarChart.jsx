import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { useSpillageContext } from '../../context/SpillageProvider'

// 1. Create a helper function to extract data for each chart
const renderChart = (title, statsArray, barColor) => {
  console.log(`First item in ${title}:`, statsArray[0]);
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
    <div style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
       <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

// 2. Main Component
const HighChartsBarChart = () => {
  const { data, loading } = useSpillageContext()

  // Guard clause for loading or empty data
  if (loading || !data) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading Dashboard Data...</div>
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* <h1 style={{ textAlign: 'center' }}>ADO Dashboard Performance</h1> */}
      
      {/* Render each of the three charts by passing their specific stats arrays */}
      {renderChart("All Stats", data.all?.stats || [], "#8884d8")}
      {renderChart("Feature Stats", data.feature?.stats || [], "#ffc658")}
      {renderChart("Client Issue Stats", data.client?.stats || [], "#ff8042")}
      
    </div>
  )
}

export default HighChartsBarChart


// import React from 'react'
// import HighchartsReact from 'highcharts-react-official'
// import Highcharts from 'highcharts'
// import { useSpillageContext } from '../../context/SpillageProvider'

// const HighChartsBarChart = () => {
//   const { data } = useSpillageContext()

//   const allStats     = data?.All?.stats || [];
//   const featureStats = data?.Feature?.stats || [];
//   const clientStats  = data?.Client?.stats || [];

//   if (!data || data.length === 0) {
//     return (
//       <div style={{
//         width: '100%',
//         height: '400px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         border: '1px dashed #ccc',
//         borderRadius: '8px'
//       }}>
//         <p>Loading Sprint Data...</p>
//       </div>
//     )
//   }

//   // Helper to safely extract numeric values from different possible field names
//   const getNumericValue = (obj, keys) => {
//     for (const k of keys) {
//       let v = obj?.[k]
//       if (v === undefined || v === null) continue
//       if (typeof v === 'string') {
//         const cleaned = v.replace(/[,\s]/g, '')
//         const n = Number(cleaned)
//         if (!Number.isNaN(n)) return n
//       }
//       if (typeof v === 'number' && !Number.isNaN(v)) return v
//     }
//     return 0
//   }

//   // Transform context data into Highcharts format
//   const sprintNames = data.map(item => 
//     item.iterationPath?.split('\\').pop() || item.name || item.sprintName || 'Sprint'
//   )

//   const assignedData = data.map(item =>
//     getNumericValue(item, ['totalPointsAssigned', 'assigned', 'assignedPoints', 'totalAssigned', 'pointsAssigned'])
//   )

//   const completedData = data.map(item =>
//     getNumericValue(item, ['totalPointsCompleted', 'completed', 'completedPoints', 'totalCompleted', 'pointsCompleted'])
//   )

//   // Highcharts configuration
//   const options = {
//     chart: {
//       type: 'column',
//       style: {
//         fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
//       }
//     },
//     title: {
//       text: 'Sprint Velocity: Assigned vs Completed Points'
//     },
//     xAxis: {
//       categories: sprintNames,
//       title: {
//         text: 'Sprint'
//       },
//       labels: {
//         rotation: -45,
//         align: 'right',
//         style: {
//           fontSize: '12px'
//         }
//       }
//     },
//     yAxis: {
//       min: 0,
//       title: {
//         text: 'Story Points'
//       },
//       stackLabels: {
//         enabled: false
//       }
//     },
//     legend: {
//       reversed: false,
//       layout: 'horizontal',
//       align: 'center',
//       verticalAlign: 'bottom'
//     },
//     plotOptions: {
//       series: {
//         pointPadding: 0.2,
//         borderWidth: 0,
//         dataLabels: {
//           enabled: true
//         }
//       }
//     },
//     series: [
//       {
//         name: 'Assigned Points',
//         data: assignedData,
//         color: '#8884d8'
//       },
//       {
//         name: 'Completed Points',
//         data: completedData,
//         color: '#82ca9d'
//       }
//     ],
//     credits: {
//       enabled: false
//     },
//     responsive: {
//       rules: [
//         {
//           condition: {
//             maxWidth: 800
//           },
//           chartOptions: {
//             legend: {
//               layout: 'vertical',
//               align: 'bottom',
//               verticalAlign: 'bottom'
//             }
//           }
//         }
//       ]
//     }
//   }

//   return (
//     <div style={{
//       width: '100%',
//       padding: '20px',
//       backgroundColor: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//     }}>
//       <HighchartsReact
//         highcharts={Highcharts}
//         options={options}
//       />
//       {console.log('HighChartsBarChart data:', { sprintNames, assignedData, completedData })}
//     </div>
//   )
// }

// export default HighChartsBarChart
