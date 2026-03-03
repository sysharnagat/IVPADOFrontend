// import React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { axisClasses } from '@mui/x-charts/ChartsAxis';

// const MuiSprintVelocityChart = () => {

//     const { data } = useSpillageContext();
//   // Guard clause for loading state
//   if (!data || data.length === 0) return <div>Loading MUI Chart...</div>;

//   // 1. Prepare data for MUI format
//   // MUI prefers arrays for each axis/series
//   const xLabels = data.map(item => item.iterationPath.split('\\').pop().replace('SPRINT ', ''));
//   const assignedPoints = data.map(item => item.totalPointsAssigned);
//   const completedPoints = data.map(item => item.totalPointsCompleted);

//   return (
//     <div style={{ width: '100%', backgroundColor: '#fff', padding: '20px', borderRadius: '12px' }}>
//       <h3 style={{ fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
//         Sprint Velocity: Assigned vs Completed
//       </h3>
      
//       <BarChart
//         // The series defines our two bars
//         series={[
//           { data: assignedPoints, label: 'Assigned', id: 'assignedId', color: '#8884d8' },
//           { data: completedPoints, label: 'Completed', id: 'completedId', color: '#82ca9d' },
//         ]}
//         // The X-Axis labels
//         xAxis={[{ 
//             data: xLabels, 
//             scaleType: 'band',
//             tickLabelStyle: {
//                 angle: -30,
//                 textAnchor: 'end',
//                 fontSize: 12,
//             }
//         }]}
//         // Y-Axis configuration
//         yAxis={[{
//             label: 'Story Points',
//         }]}
//         // Responsiveness
//         height={450} // MUI charts need a height prop
//         margin={{ top: 50, bottom: 80, left: 60, right: 20 }}
        
//         // Customizing the axis lines and markings
//         sx={{
//           [`.${axisClasses.left} .${axisClasses.label}`]: {
//             transform: 'translate(-20px, 0)',
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default MuiSprintVelocityChart;