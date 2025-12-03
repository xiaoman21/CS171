import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, Cell
} from 'recharts';
import type { MonthlyShortVsLong } from '../types';
import { formatNumber, safeDiv } from '../utils';

interface ShortVsLongChartsProps {
  data: MonthlyShortVsLong[];
  year: number;
  selectedChannels: string[];
}

export const ShortVsLongCharts: React.FC<ShortVsLongChartsProps> = ({
  data,
  selectedChannels,
}) => {
  if (data.length === 0) {
    return <div className="no-data">No data available. Please select at least one channel.</div>;
  }

  // Aggregate by channel across the year
  const channelAggregates = selectedChannels.map(channelKey => {
    const channelMonths = data.filter(d => d.channelKey === channelKey);
    
    const totalUploadsNormal = channelMonths.reduce((sum, d) => sum + d.uploads_count_Normal, 0);
    const totalUploadsShort = channelMonths.reduce((sum, d) => sum + d.uploads_count_Short, 0);
    const totalViewsNormal = channelMonths.reduce((sum, d) => sum + d.views_total_Normal, 0);
    const totalViewsShort = channelMonths.reduce((sum, d) => sum + d.views_total_Short, 0);
    
    const avgViewsNormal = safeDiv(totalViewsNormal, totalUploadsNormal);
    const avgViewsShort = safeDiv(totalViewsShort, totalUploadsShort);
    const multiplier = safeDiv(avgViewsShort, avgViewsNormal);
    
    return {
      channel: channelKey.replace('@', ''),
      avgViewsNormal,
      avgViewsShort,
      multiplier,
      totalViewsNormal,
      totalViewsShort,
    };
  }).filter(d => d.avgViewsNormal > 0 || d.avgViewsShort > 0);

  // Grouped bar chart data
  const avgViewsData = channelAggregates.map(d => ({
    channel: d.channel,
    'Normal': d.avgViewsNormal,
    'Shorts': d.avgViewsShort,
  }));

  // Multiplier bar chart data
  const multiplierData = channelAggregates.map(d => ({
    channel: d.channel,
    multiplier: d.multiplier,
    avgViewsNormal: d.avgViewsNormal,
    avgViewsShort: d.avgViewsShort,
  }));

  // Scatter data: duration vs performance
  const scatterData = data.map(d => ({
    channel: d.channelKey.replace('@', ''),
    durationNormal: d.avg_duration_seconds_Normal,
    viewsNormal: d.avg_views_per_video_Normal,
    durationShort: d.avg_duration_seconds_Short,
    viewsShort: d.avg_views_per_video_Short,
    totalViewsNormal: d.views_total_Normal,
    totalViewsShort: d.views_total_Short,
  }));

  // Flatten for scatter: one point per type per month
  const scatterPoints = scatterData.flatMap(d => [
    {
      type: 'Normal',
      duration: d.durationNormal,
      views: d.viewsNormal,
      size: d.totalViewsNormal,
      channel: d.channel,
    },
    {
      type: 'Shorts',
      duration: d.durationShort,
      views: d.viewsShort,
      size: d.totalViewsShort,
      channel: d.channel,
    },
  ]).filter(d => d.duration > 0 && d.views > 0);

  const COLORS = {
    shorts: '#FF4444',
    normal: '#4488FF',
  };

  const CustomMultiplierTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ backgroundColor: '#1a1a2e', border: '1px solid #333', padding: '10px' }}>
          <p style={{ margin: 0, color: '#fff' }}><strong>{data.channel}</strong></p>
          <p style={{ margin: '5px 0', color: COLORS.shorts }}>
            Shorts: {formatNumber(data.avgViewsShort)} avg views
          </p>
          <p style={{ margin: '5px 0', color: COLORS.normal }}>
            Normal: {formatNumber(data.avgViewsNormal)} avg views
          </p>
          <p style={{ margin: '5px 0', color: '#FFB344' }}>
            Multiplier: {data.multiplier.toFixed(2)}x
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="short-vs-long-charts">
      {/* Horizontal scrolling layout for all charts */}
      <div className="chart-grid-2">
        {/* Average Views Per Video by Type */}
        <div className="chart-container">
          <h3 className="chart-title">Average Views Per Video: Shorts vs Normal</h3>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={avgViewsData} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="channel" stroke="#C4CDDD" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#C4CDDD" tickFormatter={(v) => formatNumber(v)} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }}
                formatter={(v: any) => formatNumber(v)}
              />
              <Legend />
              <Bar dataKey="Normal" fill={COLORS.normal} />
              <Bar dataKey="Shorts" fill={COLORS.shorts} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Multiplier Chart */}
        <div className="chart-container">
          <h3 className="chart-title">Shorts vs Normal Performance Multiplier</h3>
          <p className="chart-subtitle">
            How many times more (or less) views does a Short get on average compared to a normal video?
          </p>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={multiplierData} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="channel" stroke="#C4CDDD" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#C4CDDD" label={{ value: 'Multiplier (x)', angle: -90, position: 'insideLeft', fill: '#E8EAEF' }} />
              <Tooltip content={<CustomMultiplierTooltip />} />
              <Bar dataKey="multiplier" fill="#FFB344" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Duration vs Performance Scatter - third chart */}
        <div className="chart-container">
          <h3 className="chart-title">Duration vs Performance</h3>
          <p className="chart-subtitle">
            Each point represents a channel-month. Blue = Normal videos, Red = Shorts.
          </p>
          <ResponsiveContainer width="100%" height={450}>
            <ScatterChart margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis
                type="number"
                dataKey="duration"
                name="Duration (sec)"
                stroke="#C4CDDD"
                label={{ value: 'Avg Duration (seconds)', position: 'insideBottom', offset: -10, fill: '#E8EAEF' }}
              />
              <YAxis
                type="number"
                dataKey="views"
                name="Avg Views"
                stroke="#C4CDDD"
                label={{ value: 'Avg Views Per Video', angle: -90, position: 'insideLeft', fill: '#E8EAEF' }}
                tickFormatter={(v) => formatNumber(v)}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }}
                formatter={(v: any, name: string) => {
                  if (name === 'views') return formatNumber(v);
                  if (name === 'size') return formatNumber(v);
                  return v;
                }}
              />
              <Scatter data={scatterPoints} fill="#8884d8">
                {scatterPoints.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.type === 'Shorts' ? COLORS.shorts : COLORS.normal}
                    opacity={0.6}
                    r={Math.sqrt(entry.size) / 8000}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Optional: If single channel selected, show share over time */}
      {selectedChannels.length === 1 && (
        <div className="chart-container">
          <h3 className="chart-title">Shorts Share Over Time: {selectedChannels[0].replace('@', '')}</h3>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart
              data={data.filter(d => d.channelKey === selectedChannels[0]).sort((a, b) => a.month.localeCompare(b.month))}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#A4ADBD" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#A4ADBD" label={{ value: '% Share', angle: -90, position: 'insideLeft' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333' }} />
              <Legend />
              <Bar
                dataKey="uploads_share_within_channel_month_Short"
                name="Upload Share (%)"
                fill="#FFB344"
              />
              <Bar
                dataKey="views_share_within_channel_month_Short"
                name="View Share (%)"
                fill="#FF44B3"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

