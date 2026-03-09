import React, { useMemo } from 'react';

const UserStoryCard = ({ stories }) => {
  // Performance: Only sort when the data changes
  const sortedStories = useMemo(() => {
    if (!Array.isArray(stories)) return [];
    return [...stories].sort((a, b) => 
      (b.totalHistoryCount || 0) - (a.totalHistoryCount || 0)
    );
  }, [stories]);

  const getHistoryColor = (count) => {
    if (count > 6) return 'bg-red';
    if (count >= 3) return 'bg-yellow';
    return 'bg-green';
  };

  if (sortedStories.length === 0) return <p>No stories found.</p>;

  return (
    <div className="dashboard-section">
      <div className="section-header">
        <h3>User Story Insights ({sortedStories.length})</h3>
        <small>Sorted by highest Spillage count</small>
      </div>

      <div className="story-list-wrapper">
        <div className="story-list">
          {sortedStories.map((story,idx) => (
            <div key={idx} className="story-card-modern">
              <div className="story-info">
                <div className="story-id-row">
                  <span className="id-tag">#{story.userStoryId} </span> 
                  <span className={`status-text ${story.state?.toLowerCase().replace(/\s+/g, '-')}`}>
                    {story.state}
                  </span>
                </div>
                <div className="story-title-text">{story.title}</div>
                <div className="story-meta-item">
                    <strong>Status:</strong>
                    {story.closedDate ? (
                    <span className="status-pill is-closed">
                        Check ✓ Closed
                    </span>
                    ) : (
                    <span className="status-pill is-open">
                        ● Active
                    </span>
                    )}
                </div>

                <span><strong>History:</strong> {story.totalHistoryCount} updates</span>
 
              </div>
              <div className={`history-badge ${getHistoryColor(story.totalHistoryCount)}`}>
                {story.totalHistoryCount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStoryCard;