// TypeScript types for Media Dashboard Data

export interface AnnualChannelSummary {
  channelKey: string;
  year: number;
  is_ytd: boolean;
  total_uploads: number;
  shorts_uploads: number;
  total_views: number;
  views_from_shorts_total: number;
  normal_uploads: number;
  normal_views: number;
  uploads_shorts_share: number;
  percent_views_from_shorts_from_total: number;
  engagement_per_1k_views: number;
  avg_duration_seconds: number;
  likes_per_1k_views: number;
  comments_per_1k_views: number;
  // Monthly view columns
  jan_views?: number;
  feb_views?: number;
  mar_views?: number;
  apr_views?: number;
  may_views?: number;
  jun_views?: number;
  jul_views?: number;
  aug_views?: number;
  sep_views?: number;
  oct_views?: number;
  nov_views?: number;
  dec_views?: number;
}

export interface MonthlyChannelSummary {
  channelKey: string;
  year: number;
  month: string; // YYYY-MM format
  uploads_count: number;
  uploads_short_count: number;
  uploads_normal: number;
  views_total: number;
  views_shorts: number;
  views_normal: number;
  avg_views_per_video: number;
  avg_duration_seconds: number;
  likes_per_1k_views: number;
  comments_per_1k_views: number;
  engagement_per_1k_views: number;
  percent_views_from_shorts_from_total: number;
  views_mom_pct: number;
  views_share_across_channels: number;
  uploads_shorts_share: number;
}

export interface MonthlyShortVsLong {
  channelKey: string;
  year: number;
  month: string; // YYYY-MM format
  uploads_count_Normal: number;
  uploads_count_Short: number;
  views_total_Normal: number;
  views_total_Short: number;
  likes_per_1k_views_Normal: number;
  likes_per_1k_views_Short: number;
  comments_per_1k_views_Normal: number;
  comments_per_1k_views_Short: number;
  engagement_per_1k_views_Normal: number;
  engagement_per_1k_views_Short: number;
  avg_views_per_video_Normal: number;
  avg_views_per_video_Short: number;
  avg_duration_seconds_Normal: number;
  avg_duration_seconds_Short: number;
  uploads_share_within_channel_month_Normal: number;
  uploads_share_within_channel_month_Short: number;
  views_share_within_channel_month_Normal: number;
  views_share_within_channel_month_Short: number;
  avg_views_per_video_short_div_normal: number;
  engagement_per_1k_views_short_div_normal: number;
}

export type ViewMode = 'overview' | 'channel-drilldown' | 'short-vs-long';

export interface DashboardFilters {
  year: number;
  selectedChannels: string[];
  viewMode: ViewMode;
}

