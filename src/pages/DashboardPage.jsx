import React, { useState } from 'react'
import HighChartsBarChart from '../components/burnupChart/HighChartsBarChart';
import { useSpillageContext } from '../context/SpillageProvider';

const DashboardPage = () => {

    const {data, setProject, nSprints, setNSprints, timeFrame, setTimeFrame, filterType, setFilterType} = useSpillageContext();

    
  return (
    <>
        <h1>DashboardPage</h1>
        <div style={{ display: 'flex', gap: '40px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', gap: '40px', marginBottom: '30px' }}>
                <h3>Select Project:</h3>
                <select name="" id="" onChange={e => setProject(e.target.value)}>
                    <option value='IVP-SRM'>SRM</option>
                    <option value="IVP-EDM">EDM</option>
                </select>
            </div>
            <div style={{ display: 'flex', gap: '40px', marginBottom: '30px' }}>
                

                <div style={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div>
                        <label>Show last </label>
                        <input 
                        type="number" 
                        value={nSprints} 
                        onChange={(e) => setNSprints(e.target.value)}
                        style={{ width: '50px', padding: '5px' }}
                        />
                    </div>
                    <div >
                        <select 
                            name="timeframe-select" 
                            id="timeframe-select"
                            onChange={e => setTimeFrame(e.target.value === "null" ? null : e.target.value)}
                            value={timeFrame === null ? "null" : timeFrame}
                        >
                            <option value="null">sprint-wise</option>
                            <option value="monthly">monthly</option>
                            <option value="quarterly">quarterly</option>
                            <option value="yearly">yearly</option>
                        </select>
                    </div>
                </div>

                {/* <p style={{ marginTop: '20px', color: '#666' }}>
                    <em>Current Mode: {filterType === 'sprints' ? `Last ${nSprints} sprints` : 'Date Range Selection'}</em>
                </p> */}
            </div>
        </div>
        {
            data ?  <div>
                        <HighChartsBarChart data={data} />
                    </div> : <></>
        }
    </>
  )
}

export default DashboardPage