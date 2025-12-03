import React, { useState, useEffect } from 'react';
import { loadAllData } from './dataLoader';
import type { AnnualChannelSummary, MonthlyChannelSummary, MonthlyShortVsLong, DashboardFilters } from './types';
import { OverviewCharts } from './components/OverviewCharts';
import { ChannelDrilldownCharts } from './components/ChannelDrilldownCharts';
import { ShortVsLongCharts } from './components/ShortVsLongCharts';
import './styles.css';

interface MediaDashboardSlideProps {
  initialViewMode?: 'overview' | 'channel-drilldown' | 'short-vs-long';
  showMainHeader?: boolean; // Only show "Interactive Media Analytics" header on first dashboard
  showChannelSelector?: boolean; // Show channel selector for drill-down view
}

export const MediaDashboardSlide: React.FC<MediaDashboardSlideProps> = ({ 
  initialViewMode = 'overview',
  showMainHeader = true, // Default to true for backward compatibility
  showChannelSelector = false // Show channel selector for drill-down
}) => {
  const [loading, setLoading] = useState(true);
  const [annualData, setAnnualData] = useState<AnnualChannelSummary[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyChannelSummary[]>([]);
  const [shortVsLongData, setShortVsLongData] = useState<MonthlyShortVsLong[]>([]);
  
  const [filters, setFilters] = useState<DashboardFilters>({
    year: 2024,
    selectedChannels: [],
    viewMode: initialViewMode,
  });

  useEffect(() => {
    loadAllData().then(({ annual, monthly, shortVsLong }) => {
      setAnnualData(annual);
      setMonthlyData(monthly);
      setShortVsLongData(shortVsLong);
      
      // Set default: all channels selected
      const allChannels = Array.from(new Set(annual.map(d => d.channelKey)));
      setFilters(prev => ({ ...prev, selectedChannels: allChannels }));
      
      setLoading(false);
    });
  }, []);

  const handleFilterChange = (newFilters: Partial<DashboardFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (loading) {
    return (
      <div className="dashboard-slide loading">
        <div className="loading-spinner">Loading dashboard data...</div>
      </div>
    );
  }

  const allChannels = Array.from(new Set(annualData.map(d => d.channelKey)));

  // Filter data based on current selections
  const filteredAnnual = annualData.filter(
    d => d.year === filters.year && filters.selectedChannels.includes(d.channelKey)
  );
  
  const filteredMonthly = monthlyData.filter(
    d => d.year === filters.year && filters.selectedChannels.includes(d.channelKey)
  );
  
  const filteredShortVsLong = shortVsLongData.filter(
    d => d.year === filters.year && filters.selectedChannels.includes(d.channelKey)
  );

  // View mode display names
  const viewModeNames = {
    'overview': 'Overview',
    'channel-drilldown': 'Channel Drill-down',
    'short-vs-long': 'Short vs Long'
  };

  return (
    <section className="slide-section media-dashboard-slide" id="dashboard">
      <div className="dashboard-container">
        {/* Main Header - Only show on first dashboard */}
        {showMainHeader && (
          <div className="dashboard-header">
            <h2 className="dashboard-title">Interactive Media Analytics</h2>
            <p className="dashboard-subtitle">
              Explore how top YouTube channels balance short-form and long-form content strategies
            </p>
          </div>
        )}

        {/* View Mode Label - Show on all dashboards at top */}
        {!showMainHeader && (
          <div className="dashboard-view-label">
            <h3 className="view-mode-name">{viewModeNames[initialViewMode]}</h3>
          </div>
        )}

        {/* Main Content */}
        <div className="dashboard-content">
          {/* Left: Controls - conditionally render based on view */}
          {showChannelSelector && initialViewMode === 'channel-drilldown' && (
            <div className="channel-selector-compact">
              <label className="control-label">Select Channel</label>
              <select 
                className="channel-select-dropdown"
                value={filters.selectedChannels[0] || allChannels[0]}
                onChange={(e) => handleFilterChange({ selectedChannels: [e.target.value] })}
              >
                {allChannels.map(channel => (
                  <option key={channel} value={channel}>
                    {channel.replace('@', '')}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Right: Charts - full width */}
          <div className="dashboard-charts">
            {initialViewMode === 'overview' && (
              <OverviewCharts data={filteredAnnual} year={filters.year} />
            )}
            
            {initialViewMode === 'channel-drilldown' && (
              <ChannelDrilldownCharts
                data={filteredMonthly}
                year={filters.year}
                selectedChannels={filters.selectedChannels}
              />
            )}
            
            {initialViewMode === 'short-vs-long' && (
              <ShortVsLongCharts
                data={filteredShortVsLong}
                year={filters.year}
                selectedChannels={filters.selectedChannels}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaDashboardSlide;

