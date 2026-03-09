import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'
import React from 'react'

const RenderLineChart = ({title, spillageArray, lineColor}) => {

  // 1. Map labels using 'iterationPath' from your log
    const categories = spillageArray.map(item => 
      item.iterationPath?.split('\\').pop() || 'Sprint'
    );
  
    // 2. Map data using 'spillagePoints' from your log
    const spilledData = spillageArray.map(item => item.spillagePoints || 0);
  
    const options = {
      chart: { 
        type: 'line',
        style: { fontFamily: 'Roboto, Arial, sans-serif' }
      },
      title: { text: title },
      xAxis: { 
        categories: categories,
        labels: { rotation: -45 } 
      },
      yAxis: { 
        title: { text: 'Spilled Points' },
        min: 0 
      },
      series: [{
        name: 'Spilled Points',
        data: spilledData,
        color: lineColor,
        marker: { enabled: true, radius: 5 },
        lineWidth: 3
      }],
      credits: { enabled: false }
    };
  
    return (
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
         <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
}

export default RenderLineChart