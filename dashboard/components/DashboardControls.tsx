import React from 'react';
import type { DashboardFilters, ViewMode } from '../types';

interface DashboardControlsProps {
  filters: DashboardFilters;
  allChannels: string[];
  onFilterChange: (filters: Partial<DashboardFilters>) => void;
}

const VIEW_MODE_INFO: Record<ViewMode, { title: string; description: string }> = {
  'overview': {
    title: 'Overview',
    description: 'Compares how much each channel invests in Shorts vs how much viewership Shorts generate.'
  },
  'channel-drilldown': {
    title: 'Channel Drill-down',
    description: 'Shows how one channel\'s strategy evolved month by month.'
  },
  'short-vs-long': {
    title: 'Short vs Long',
    description: 'Compares the per-video performance of Shorts vs long-form content.'
  },
};

export const DashboardControls: React.FC<DashboardControlsProps> = ({
  filters,
  allChannels,
  onFilterChange,
}) => {
  const handleChannelToggle = (channel: string) => {
    const newSelected = filters.selectedChannels.includes(channel)
      ? filters.selectedChannels.filter(c => c !== channel)
      : [...filters.selectedChannels, channel];
    
    onFilterChange({ selectedChannels: newSelected });
  };

  const handleSelectAll = () => {
    onFilterChange({ selectedChannels: allChannels });
  };

  const handleDeselectAll = () => {
    onFilterChange({ selectedChannels: [] });
  };

  const channelDisplayName = (key: string) => key.replace('@', '');

  return (
    <div className="dashboard-controls">
      {/* Year Selector */}
      <div className="control-group">
        <label className="control-label">Year</label>
        <div className="year-selector-group">
          <button
            className={`year-btn ${filters.year === 2024 ? 'active' : ''}`}
            onClick={() => onFilterChange({ year: 2024 })}
          >
            2024
          </button>
          <button
            className={`year-btn ${filters.year === 2025 ? 'active' : ''}`}
            onClick={() => onFilterChange({ year: 2025 })}
          >
            2025 YTD
          </button>
        </div>
      </div>

      {/* Channel Selector */}
      <div className="control-group">
        <label className="control-label">Channels</label>
        <div className="channel-actions">
          <button className="action-btn" onClick={handleSelectAll}>
            Select All
          </button>
          <button className="action-btn" onClick={handleDeselectAll}>
            Deselect All
          </button>
        </div>
        <div className="channel-list">
          {allChannels.map(channel => (
            <label key={channel} className="channel-checkbox">
              <input
                type="checkbox"
                checked={filters.selectedChannels.includes(channel)}
                onChange={() => handleChannelToggle(channel)}
              />
              <span className="channel-name">{channelDisplayName(channel)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="control-group">
        <label className="control-label">View Mode</label>
        <div className="view-mode-tabs">
          {(Object.keys(VIEW_MODE_INFO) as ViewMode[]).map(mode => (
            <button
              key={mode}
              className={`view-mode-btn ${filters.viewMode === mode ? 'active' : ''}`}
              onClick={() => onFilterChange({ viewMode: mode })}
            >
              {VIEW_MODE_INFO[mode].title}
            </button>
          ))}
        </div>
      </div>

      {/* Legend / Description */}
      <div className="control-group">
        <div className="view-description">
          <h4 className="view-description-title">
            {VIEW_MODE_INFO[filters.viewMode].title}
          </h4>
          <p className="view-description-text">
            {VIEW_MODE_INFO[filters.viewMode].description}
          </p>
        </div>
      </div>
    </div>
  );
};

