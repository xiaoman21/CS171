import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import type { MonthlyChannelSummary } from '../types';
import { formatNumber, safeDiv } from '../utils';
import { ChartCarousel } from './ChartCarousel';

interface ChannelDrilldownChartsProps {
  data: MonthlyChannelSummary[];
  year: number;
  selectedChannels: string[];
}

export const ChannelDrilldownCharts: React.FC<ChannelDrilldownChartsProps> = ({
  data,
  year,
  selectedChannels,
}) => {
  if (data.length === 0) {
    return <div className="no-data">No data available. Please select at least one channel.</div>;
  }

  // Use first selected channel for drill-down
  const drilldownChannel = selectedChannels[0];
  const channelData = data.filter(d => d.channelKey === drilldownChannel).sort((a, b) => a.month.localeCompare(b.month));

  if (channelData.length === 0) {
    return <div className="no-data">No monthly data available for {drilldownChannel}.</div>;
  }

  // KPIs for the channel
  const totalViews = channelData.reduce((sum, d) => sum + d.views_total, 0);
  const totalUploads = channelData.reduce((sum, d) => sum + d.uploads_count, 0);
  const totalShorts = channelData.reduce((sum, d) => sum + d.uploads_short_count, 0);
  const totalShortsViews = channelData.reduce((sum, d) => sum + d.views_shorts, 0);
  const avgViewsPerVideo = safeDiv(totalViews, totalUploads);
  const shortsUploadShare = safeDiv(totalShorts, totalUploads);
  const shortsViewShare = safeDiv(totalShortsViews, totalViews);
  const weightedEngagement = safeDiv(
    channelData.reduce((sum, d) => sum + d.engagement_per_1k_views * d.views_total, 0),
    totalViews
  );

  // Monthly views data
  const monthlyViewsData = channelData.map(d => ({
    month: d.month,
    'Total Views': d.views_total,
    'Shorts Views': d.views_shorts,
    'Normal Views': d.views_normal,
  }));

  // Monthly uploads data
  const monthlyUploadsData = channelData.map(d => ({
    month: d.month,
    Shorts: d.uploads_short_count,
    Normal: d.uploads_normal,
  }));

  // Shorts share over time
  const shortsShareData = channelData.map(d => ({
    month: d.month,
    'Upload Share (%)': (d.uploads_shorts_share * 100).toFixed(1),
    'View Share (%)': (d.percent_views_from_shorts_from_total * 100).toFixed(1),
  }));

  const COLORS = {
    shorts: '#FF4444',
    normal: '#4488FF',
    total: '#44FF88',
  };

  // Prepare chart elements for carousel
  const drilldownNote = selectedChannels.length > 1 ? (
    <div className="drilldown-note">
      Drill-down shown for: <strong>{drilldownChannel.replace('@', '')}</strong>
      {' '}(you have {selectedChannels.length} channels selected)
    </div>
  ) : null;

  const kpiCards = (
    <div className="kpi-row">
      <div className="kpi-card">
        <div className="kpi-value">{formatNumber(totalViews)}</div>
        <div className="kpi-label">Total Views ({year})</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-value">{totalUploads}</div>
        <div className="kpi-label">Total Uploads</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-value">{formatNumber(avgViewsPerVideo)}</div>
        <div className="kpi-label">Avg Views/Video</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-value">{(shortsUploadShare * 100).toFixed(1)}%</div>
        <div className="kpi-label">Shorts Share (Uploads)</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-value">{(shortsViewShare * 100).toFixed(1)}%</div>
        <div className="kpi-label">Shorts Share (Views)</div>
      </div>
      <div className="kpi-card">
        <div className="kpi-value">{weightedEngagement.toFixed(2)}</div>
        <div className="kpi-label">Engagement / 1K Views</div>
      </div>
    </div>
  );

  const chartElements = [
    // Chart 1: Monthly Views with KPIs
    <div key="monthly-views" className="carousel-chart-full">
      {drilldownNote}
      {kpiCards}
      <div className="chart-container">
        <h3 className="chart-title">Monthly Views</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={monthlyViewsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#A4ADBD" angle={-45} textAnchor="end" height={80} />
            <YAxis stroke="#A4ADBD" tickFormatter={(v) => formatNumber(v)} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }}
              formatter={(v: any) => formatNumber(v)}
            />
            <Legend />
            <Line type="monotone" dataKey="Total Views" stroke={COLORS.total} strokeWidth={2} />
            <Line type="monotone" dataKey="Shorts Views" stroke={COLORS.shorts} strokeWidth={2} />
            <Line type="monotone" dataKey="Normal Views" stroke={COLORS.normal} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>,
    
    // Chart 2: Monthly Uploads Stacked
    <div key="monthly-uploads" className="chart-container">
          <h3 className="chart-title">Monthly Uploads by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyUploadsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#A4ADBD" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#A4ADBD" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }} />
              <Legend />
              <Bar dataKey="Shorts" stackId="a" fill={COLORS.shorts} />
              <Bar dataKey="Normal" stackId="a" fill={COLORS.normal} />
            </BarChart>
          </ResponsiveContainer>
        </div>,
    
    // Chart 3: Shorts Share Over Time
    <div key="shorts-share" className="chart-container">
          <h3 className="chart-title">Shorts Share Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={shortsShareData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#A4ADBD" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#A4ADBD" label={{ value: '% Share', angle: -90, position: 'insideLeft' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }} />
              <Legend />
              <Line type="monotone" dataKey="Upload Share (%)" stroke="#FFB344" strokeWidth={2} />
              <Line type="monotone" dataKey="View Share (%)" stroke="#FF44B3" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
  ];

  return (
    <div className="drilldown-charts">
      <ChartCarousel>
        {chartElements}
      </ChartCarousel>
    </div>
  );
};

