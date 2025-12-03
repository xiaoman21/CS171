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
    const response = await fetch('/tbl_AnnualChannelSummary.csv');
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
        year: parseNumber(row.year),
        is_ytd: row.is_ytd === 'True' || row.is_ytd === 'true',
        total_uploads: total,
        shorts_uploads: shorts,
        total_views: viewsTotal,
        views_from_shorts_total: viewsShorts,
        normal_uploads: parseNumber(row.normal_uploads),
        normal_views: parseNumber(row.normal_views),
        uploads_shorts_share: parseNumber(row.uploads_shorts_share),
        percent_views_from_shorts_from_total: parseNumber(row.percent_views_from_shorts_from_total),
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
    const response = await fetch('/tbl_MonthlyChannelSummary.csv');
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
      const uploadsNormal = parseNumber(row.uploads_normal);
      const viewsShorts = parseNumber(row.views_shorts);
      const viewsTotal = parseNumber(row.views_total);
      const viewsNormal = parseNumber(row.views_normal);
      
      return {
        channelKey: row.channelKey,
        year: parseNumber(row.year),
        month: row.month,
        uploads_count: uploadsTotal,
        uploads_short_count: uploadsShort,
        uploads_normal: uploadsNormal,
        views_total: viewsTotal,
        views_shorts: viewsShorts,
        views_normal: viewsNormal,
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
  try {
    const response = await fetch('/tbl_MonthlyShortVsLong.csv');
    const text = await response.text();
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const row: any = {};
      headers.forEach((header, i) => {
        row[header.trim()] = values[i]?.trim() || '';
      });
      
      return {
        channelKey: row.channelKey,
        year: parseNumber(row.year),
        month: row.month,
        uploads_count_Normal: parseNumber(row.uploads_count_Normal),
        uploads_count_Short: parseNumber(row.uploads_count_Short),
        views_total_Normal: parseNumber(row.views_total_Normal),
        views_total_Short: parseNumber(row.views_total_Short),
        likes_per_1k_views_Normal: parseNumber(row.likes_per_1k_views_Normal),
        likes_per_1k_views_Short: parseNumber(row.likes_per_1k_views_Short),
        comments_per_1k_views_Normal: parseNumber(row.comments_per_1k_views_Normal),
        comments_per_1k_views_Short: parseNumber(row.comments_per_1k_views_Short),
        engagement_per_1k_views_Normal: parseNumber(row.engagement_per_1k_views_Normal),
        engagement_per_1k_views_Short: parseNumber(row.engagement_per_1k_views_Short),
        avg_views_per_video_Normal: parseNumber(row.avg_views_per_video_Normal),
        avg_views_per_video_Short: parseNumber(row.avg_views_per_video_Short),
        avg_duration_seconds_Normal: parseNumber(row.avg_duration_seconds_Normal),
        avg_duration_seconds_Short: parseNumber(row.avg_duration_seconds_Short),
        uploads_share_within_channel_month_Normal: parseNumber(row.uploads_share_within_channel_month_Normal),
        uploads_share_within_channel_month_Short: parseNumber(row.uploads_share_within_channel_month_Short),
        views_share_within_channel_month_Normal: parseNumber(row.views_share_within_channel_month_Normal),
        views_share_within_channel_month_Short: parseNumber(row.views_share_within_channel_month_Short),
        avg_views_per_video_short_div_normal: parseNumber(row.avg_views_per_video_short_div_normal),
        engagement_per_1k_views_short_div_normal: parseNumber(row.engagement_per_1k_views_short_div_normal),
      };
    });
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

