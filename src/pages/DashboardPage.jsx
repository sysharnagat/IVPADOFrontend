import React, { useState } from 'react'
import HighChartsBarChart, { sections } from '../components/burnupChart/HighChartsBarChart';
import { useSpillageContext } from '../context/SpillageProvider';
import UserStoryCard from '../components/UserStoryCard';

const DashboardPage = () => {

    const {data, setProject, nSprints, setNSprints, timeFrame, setTimeFrame, filterType, setFilterType} = useSpillageContext();

        // 1. Initialize state with the 'key' of the first section ('all')
    const [activeSection, setActiveSection] = useState('all');

    // 2. Find the configuration for the currently selected section
    const currentSection = sections.find(s => s.key === activeSection);

  return (
    <div className="dashboard-container">
      <h1>Dashboard Page</h1>

      <div className="filter-row">
        {/* Project Selection */}
        <div className="filter-group">
          <h3>Select Project:</h3>
          <select 
            className="select-dropdown" 
            onChange={e => setProject(e.target.value)}
          >
            <option value='IVP-SRM'>SRM</option>
            <option value="IVP-EDM">EDM</option>
          </select>
        </div>

        {/* Timeframe and Sprint Controls */}
        <div className="controls-container">
          <div className="filter-group">
            <label>Show last </label>
            <input 
              type="number" 
              className="sprint-input"
              value={nSprints} 
              onChange={(e) => setNSprints(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <select 
              className="select-dropdown"
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
      </div>

      {/* Chart Display */}
      {data ? (
        <div className="chart-container">
          <HighChartsBarChart data={data} />
          <div className="filter-header">
            <h3>View Category:</h3>
            
            {/* 3. The Filter Dropdown */}
            <div className="tab-container">
            {sections.map(section => (
                <button
                key={section.key}
                className={`tab-button ${activeSection === section.key ? 'active' : ''}`}
                onClick={() => setActiveSection(section.key)}
                >
                {section.title}
                </button>
            ))}
            </div>
        </div>

        <hr className="divider" />

        {/* 4. Conditional Rendering */}
        {data && currentSection && (
            <div className="active-view-container">
            <h2 style={{ color: currentSection.barColor }}>
                {currentSection.title} Stories
            </h2>
            
            <UserStoryCard 
                stories={data[currentSection.key]?.history || []} 
            />
            </div>
        )}
            </div>
        ) : null}
    </div>
  );
}

export default DashboardPage