import React, { useState, useEffect } from 'react';
import { loadAllData } from './dataLoader';
import type { AnnualChannelSummary, MonthlyChannelSummary, MonthlyShortVsLong, DashboardFilters, ViewMode } from './types';
import { DashboardControls } from './components/DashboardControls';
import { OverviewCharts } from './components/OverviewCharts';
import { ChannelDrilldownCharts } from './components/ChannelDrilldownCharts';
import { ShortVsLongCharts } from './components/ShortVsLongCharts';
import './styles.css';

export const MediaDashboardSlide: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [annualData, setAnnualData] = useState<AnnualChannelSummary[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyChannelSummary[]>([]);
  const [shortVsLongData, setShortVsLongData] = useState<MonthlyShortVsLong[]>([]);
  
  const [filters, setFilters] = useState<DashboardFilters>({
    year: 2024,
    selectedChannels: [],
    viewMode: 'overview',
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

  return (
    <section className="slide-section media-dashboard-slide" id="dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <h2 className="dashboard-title">Interactive Media Analytics</h2>
          <p className="dashboard-subtitle">
            Explore how top YouTube channels balance short-form and long-form content strategies
          </p>
        </div>

        {/* Main Content */}
        <div className="dashboard-content">
          {/* Left: Controls */}
          <DashboardControls
            filters={filters}
            allChannels={allChannels}
            onFilterChange={handleFilterChange}
          />

          {/* Right: Charts */}
          <div className="dashboard-charts">
            {filters.viewMode === 'overview' && (
              <OverviewCharts data={filteredAnnual} year={filters.year} />
            )}
            
            {filters.viewMode === 'channel-drilldown' && (
              <ChannelDrilldownCharts
                data={filteredMonthly}
                year={filters.year}
                selectedChannels={filters.selectedChannels}
              />
            )}
            
            {filters.viewMode === 'short-vs-long' && (
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

