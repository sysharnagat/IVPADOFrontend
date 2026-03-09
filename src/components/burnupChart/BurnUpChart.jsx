import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { useSpillageContext } from '../../context/SpillageProvider';

const BurnUpChart = ({data}) => {

 

    if (!data || data.length === 0) {
    return (
      <div style={{ 
        width: '100%', 
        height: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        border: '1px dashed #ccc',
        borderRadius: '8px' 
      }}>
        <p>Loading Sprint Data...</p>
      </div>
    );
  }
    
    // Format the data for better display
  const chartData = data.map(item => ({
    ...item,
    // Extract just the sprint name from "IVP-SRM\\SPRINT 22 Sep..."
    shortName: item.iterationPath?.split('\\').pop() || item.name || 'Sprint',
    // Map API fields to keys used by the chart
    assigned: item.totalPointsAssigned ?? item.assigned ?? 0,
    completed: item.totalPointsCompleted ?? item.completed ?? 0,
    // Calculate completion percentage for the tooltip
    completionRate: item.totalPointsAssigned > 0 
      ? ((item.totalPointsCompleted / item.totalPointsAssigned) * 100).toFixed(1) 
      : 0
  }));
  

  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <h3>Sprint Velocity: Assigned vs Completed</h3>
      <ResponsiveContainer>
        <BarChart
            width={800} 
            height={400}
          data={chartData}
          margin={{ top: 20, right: 10, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="shortName" 
            angle={-40} 
            textAnchor="end" 
            interval={0} 
            height={80}
          />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Bar dataKey="completed" name="Completed Points" fill="#82ca9d" />
          <Bar dataKey="assigned" name="Assigned Points" fill="#8884d8" />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BurnUpChart