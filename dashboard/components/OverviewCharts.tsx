import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, Cell
} from 'recharts';
import type { AnnualChannelSummary } from '../types';
import { formatNumber, safeDiv } from '../utils';

interface OverviewChartsProps {
  data: AnnualChannelSummary[];
  year: number;
}

export const OverviewCharts: React.FC<OverviewChartsProps> = ({ data, year }) => {
  if (data.length === 0) {
    return <div className="no-data">No data available. Please select at least one channel.</div>;
  }

  // Aggregate KPIs
  const totalViews = data.reduce((sum, d) => sum + d.total_views, 0);
  const totalUploads = data.reduce((sum, d) => sum + d.total_uploads, 0);
  const totalShorts = data.reduce((sum, d) => sum + d.shorts_uploads, 0);
  const totalShortsViews = data.reduce((sum, d) => sum + d.views_from_shorts_total, 0);
  const shortsUploadShare = safeDiv(totalShorts, totalUploads);
  const shortsViewShare = safeDiv(totalShortsViews, totalViews);
  
  // Weighted average engagement
  const weightedEngagement = safeDiv(
    data.reduce((sum, d) => sum + d.engagement_per_1k_views * d.total_views, 0),
    totalViews
  );

  // Data for views by channel bar chart
  const viewsByChannel = data
    .map(d => ({
      channel: d.channelKey.replace('@', ''),
      views: d.total_views,
    }))
    .sort((a, b) => b.views - a.views);

  // Data for stacked bar chart (uploads)
  const uploadsComparison = data.map(d => ({
    channel: d.channelKey.replace('@', ''),
    Shorts: d.shorts_uploads,
    Normal: d.normal_uploads,
  }));

  // Data for stacked bar chart (views)
  const viewsComparison = data.map(d => ({
    channel: d.channelKey.replace('@', ''),
    Shorts: d.views_from_shorts_total,
    Normal: d.normal_views,
  }));

  // Data for scatter plot
  const scatterData = data.map(d => ({
    channel: d.channelKey.replace('@', ''),
    x: d.uploads_shorts_share * 100,
    y: d.percent_views_from_shorts_from_total * 100,
    size: d.total_views,
  }));

  const COLORS = {
    shorts: '#FF4444',
    normal: '#4488FF',
  };

  return (
    <div className="overview-charts">
      {/* KPI Cards */}
      <div className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-value">{formatNumber(totalViews)}</div>
          <div className="kpi-label">Total Views</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-value">{formatNumber(totalUploads)}</div>
          <div className="kpi-label">Total Uploads</div>
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

      {/* Views by Channel */}
      <div className="chart-container">
        <h3 className="chart-title">Total Views by Channel ({year})</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={viewsByChannel} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis
              dataKey="channel"
              angle={-45}
              textAnchor="end"
              height={80}
              stroke="#C4CDDD"
            />
            <YAxis stroke="#C4CDDD" tickFormatter={(v) => formatNumber(v)} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }}
              formatter={(v: any) => formatNumber(v)}
            />
            <Bar dataKey="views" fill="#4488FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Horizontal scrolling layout for all charts */}
      <div className="chart-grid-2">
        {/* Uploads Comparison */}
        <div className="chart-container">
          <h3 className="chart-title">Uploads: Shorts vs Normal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={uploadsComparison} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                dataKey="channel"
                angle={-45}
                textAnchor="end"
                height={80}
                stroke="#C4CDDD"
              />
              <YAxis stroke="#C4CDDD" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }} />
              <Legend />
              <Bar dataKey="Shorts" stackId="a" fill={COLORS.shorts} />
              <Bar dataKey="Normal" stackId="a" fill={COLORS.normal} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Views Comparison */}
        <div className="chart-container">
          <h3 className="chart-title">Views: Shorts vs Normal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={viewsComparison} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                dataKey="channel"
                angle={-45}
                textAnchor="end"
                height={80}
                stroke="#C4CDDD"
              />
              <YAxis stroke="#C4CDDD" tickFormatter={(v) => formatNumber(v)} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }}
                formatter={(v: any) => formatNumber(v)}
              />
              <Legend />
              <Bar dataKey="Shorts" stackId="a" fill={COLORS.shorts} />
              <Bar dataKey="Normal" stackId="a" fill={COLORS.normal} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Scatter Plot - third chart in horizontal scroll */}
        <div className="chart-container">
          <h3 className="chart-title">Shorts Supply vs Impact</h3>
          <p className="chart-subtitle">
            X-axis: % of uploads that are Shorts | Y-axis: % of views from Shorts | Size: Total views
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 30, left: 60, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                type="number"
                dataKey="x"
                name="Shorts Upload %"
                stroke="#C4CDDD"
                label={{ value: 'Shorts Upload Share (%)', position: 'insideBottom', offset: -10, fill: '#E8EAEF' }}
              />
              <YAxis
                type="number"
                dataKey="y"
                name="Shorts Views %"
                stroke="#C4CDDD"
                label={{ value: 'Shorts Views Share (%)', angle: -90, position: 'insideLeft', fill: '#E8EAEF' }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }}
                formatter={(v: any, name: string) => {
                  if (name === 'size') return formatNumber(v);
                  return `${v.toFixed(1)}%`;
                }}
              />
              <Scatter data={scatterData} fill="#FF4444">
                {scatterData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill="#FF4444"
                    opacity={0.7}
                    r={Math.sqrt(entry.size) / 10000}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

