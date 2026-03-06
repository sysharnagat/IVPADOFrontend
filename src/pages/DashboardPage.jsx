import React from 'react'
import HighChartsBarChart from '../components/burnupChart/HighChartsBarChart';
import { useSpillageContext } from '../context/SpillageProvider';

const DashboardPage = () => {

    const {data} = useSpillageContext();
  return (
    <>
        <h1>DashboardPage</h1>
        {
            data ? data.map((item, index) => (
                <div key={index}>
                    {console.log(item)}
                    {item.map((subItem, subIndex) => (
                        <div>
                            <HighChartsBarChart data={subItem.stats} />
                        </div>
                    ))}
                </div>
                )) : <></>
        }
    </>
  )
}

export default DashboardPage