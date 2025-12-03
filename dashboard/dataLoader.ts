// Data loading and parsing utilities

import type { AnnualChannelSummary, MonthlyChannelSummary, MonthlyShortVsLong } from './types';

function parseNumber(value: string | number): number {
  if (typeof value === 'number') return value;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
}

function safeDiv(num: number, den: number): number {
  return den === 0 ? 0 : num / den;
}

export async function loadAnnualData(): Promise<AnnualChannelSummary[]> {
  try {
    const response = await fetch('/top2024_annual_summary.csv');
    const text = await response.text();
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const row: any = {};
      headers.forEach((header, i) => {
        row[header.trim()] = values[i]?.trim() || '';
      });
      
      const shorts = parseNumber(row.shorts_uploads);
      const total = parseNumber(row.total_uploads);
      const viewsShorts = parseNumber(row.views_from_shorts_total || 0);
      const viewsTotal = parseNumber(row.total_views);
      
      return {
        channelKey: row.channelKey,
        year: 2024,
        is_ytd: false,
        total_uploads: total,
        shorts_uploads: shorts,
        total_views: viewsTotal,
        views_from_shorts_total: viewsShorts,
        normal_uploads: total - shorts,
        normal_views: viewsTotal - viewsShorts,
        uploads_shorts_share: safeDiv(shorts, total),
        percent_views_from_shorts_from_total: safeDiv(viewsShorts, viewsTotal),
        engagement_per_1k_views: parseNumber(row.engagement_per_1k_views),
        avg_duration_seconds: parseNumber(row.avg_duration_seconds),
        likes_per_1k_views: parseNumber(row.likes_per_1k_views),
        comments_per_1k_views: parseNumber(row.comments_per_1k_views),
        jan_views: parseNumber(row.jan_views),
        feb_views: parseNumber(row.feb_views),
        mar_views: parseNumber(row.mar_views),
        apr_views: parseNumber(row.apr_views),
        may_views: parseNumber(row.may_views),
        jun_views: parseNumber(row.jun_views),
        jul_views: parseNumber(row.jul_views),
        aug_views: parseNumber(row.aug_views),
        sep_views: parseNumber(row.sep_views),
        oct_views: parseNumber(row.oct_views),
        nov_views: parseNumber(row.nov_views),
        dec_views: parseNumber(row.dec_views),
      };
    });
  } catch (error) {
    console.error('Error loading annual data:', error);
    return [];
  }
}

export async function loadMonthlyData(): Promise<MonthlyChannelSummary[]> {
  try {
    const response = await fetch('/top_channels_2024_monthly_summary.csv');
    const text = await response.text();
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const row: any = {};
      headers.forEach((header, i) => {
        row[header.trim()] = values[i]?.trim() || '';
      });
      
      const uploadsShort = parseNumber(row.uploads_short_count);
      const uploadsTotal = parseNumber(row.uploads_count);
      const viewsShorts = parseNumber(row.views_shorts);
      const viewsTotal = parseNumber(row.views_total);
      
      return {
        channelKey: row.channelKey,
        year: parseInt(row.month.split('-')[0]),
        month: row.month,
        uploads_count: uploadsTotal,
        uploads_short_count: uploadsShort,
        uploads_normal: uploadsTotal - uploadsShort,
        views_total: viewsTotal,
        views_shorts: viewsShorts,
        views_normal: viewsTotal - viewsShorts,
        avg_views_per_video: parseNumber(row.avg_views_per_video),
        avg_duration_seconds: parseNumber(row.avg_duration_seconds),
        likes_per_1k_views: parseNumber(row.likes_per_1k_views),
        comments_per_1k_views: parseNumber(row.comments_per_1k_views),
        engagement_per_1k_views: parseNumber(row.engagement_per_1k_views),
        percent_views_from_shorts_from_total: parseNumber(row.percent_views_from_shorts_from_total),
        views_mom_pct: parseNumber(row.views_mom_pct),
        views_share_across_channels: parseNumber(row.views_share_across_channels),
        uploads_shorts_share: parseNumber(row.uploads_shorts_share),
      };
    });
  } catch (error) {
    console.error('Error loading monthly data:', error);
    return [];
  }
}

export async function loadShortVsLongData(): Promise<MonthlyShortVsLong[]> {
  // This file needs to be created - for now return derived data from monthly
  try {
    const monthlyData = await loadMonthlyData();
    
    return monthlyData.map(row => ({
      channelKey: row.channelKey,
      year: row.year,
      month: row.month,
      uploads_count_Normal: row.uploads_normal,
      uploads_count_Short: row.uploads_short_count,
      views_total_Normal: row.views_normal,
      views_total_Short: row.views_shorts,
      likes_per_1k_views_Normal: 0, // Would need separate data
      likes_per_1k_views_Short: 0,
      comments_per_1k_views_Normal: 0,
      comments_per_1k_views_Short: 0,
      engagement_per_1k_views_Normal: 0,
      engagement_per_1k_views_Short: 0,
      avg_views_per_video_Normal: safeDiv(row.views_normal, row.uploads_normal),
      avg_views_per_video_Short: safeDiv(row.views_shorts, row.uploads_short_count),
      avg_duration_seconds_Normal: row.avg_duration_seconds,
      avg_duration_seconds_Short: 60, // Approximate
      uploads_share_within_channel_month_Normal: safeDiv(row.uploads_normal, row.uploads_count),
      uploads_share_within_channel_month_Short: safeDiv(row.uploads_short_count, row.uploads_count),
      views_share_within_channel_month_Normal: safeDiv(row.views_normal, row.views_total),
      views_share_within_channel_month_Short: safeDiv(row.views_shorts, row.views_total),
      avg_views_per_video_short_div_normal: safeDiv(
        safeDiv(row.views_shorts, row.uploads_short_count),
        safeDiv(row.views_normal, row.uploads_normal)
      ),
      engagement_per_1k_views_short_div_normal: 1,
    }));
  } catch (error) {
    console.error('Error loading short vs long data:', error);
    return [];
  }
}

export async function loadAllData() {
  const [annual, monthly, shortVsLong] = await Promise.all([
    loadAnnualData(),
    loadMonthlyData(),
    loadShortVsLongData(),
  ]);
  
  return { annual, monthly, shortVsLong };
}

