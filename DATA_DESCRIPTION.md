# Data Description

Comprehensive documentation of all datasets used in the "Are Videos Getting Shorter?" visualization project.

---

## 1. TikTok Users by Country

**File:** `tiktok-users-by-country-2025.csv`
**Source:** World Population Review
**Records:** ~150 countries

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `flagCode` | String | Two-letter country code (e.g., US, ID, BR) |
| `country` | String | Full country name |
| `TikTokUsers_2025` | Integer | Number of TikTok users in 2025 |
| `TikTokUsers_2024` | Integer | Number of TikTok users in 2024 |
| `TikTokUsers_2023` | Integer | Number of TikTok users in 2023 |

### Sample Data
```csv
US,United States,136000000,148017000,113300000
ID,Indonesia,108000000,126831500,109900000
BR,Brazil,91700000,98589500,82210000
```

---

## 2. YouTube Annual Summary

**File:** `top2024_annual_summary.csv`
**Source:** YouTube Data API v3
**Records:** 12 channels (5 creators + 7 media brands)
**Time:** January - December 2024

### Channels
- **Creators:** @MrBeast, @TSeries, @CoComelon, @SETIndia, @VladandNiki
- **Media:** @NBA, @ESPN, @HouseofHighlights, @Vox, @nytimes, @Veritasium, @theoffice

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `channelKey` | String | Channel handle (e.g., @MrBeast) |
| `total_uploads` | Integer | Total videos uploaded in 2024 |
| `total_views` | Integer | Total views across all videos |
| `total_likes` | Integer | Total likes received |
| `total_comments` | Integer | Total comments received |
| `avg_duration_seconds` | Float | Average video duration in seconds |
| `shorts_uploads` | Integer | Number of Shorts uploaded |
| `views_from_shorts_total` | Integer | Total views from Shorts |
| `uploads_shorts_share` | Float | Proportion of uploads that are Shorts (0-1) |
| `percent_views_from_shorts_from_total` | Float | Percentage of total views from Shorts (0-1) |
| `avg_monthly_views` | Float | Average views per month |
| `likes_per_1k_views` | Float | Likes per 1,000 views |
| `comments_per_1k_views` | Float | Comments per 1,000 views |
| `engagement_per_1k_views` | Float | (likes + comments) / views × 1000 |
| `jan_views` through `dec_views` | Integer | Monthly view totals |

### Sample Data
```csv
@MrBeast,62,22102537014,635102021,4766048,493.39,41,16418599335,0.6613,0.7428
```

---

## 3. YouTube Monthly Summary

**File:** `top_channels_2024_monthly_summary.csv`
**Source:** YouTube Data API v3
**Records:** 144 records (12 channels × 12 months)
**Time:** January - December 2024

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `channelKey` | String | Channel handle |
| `month` | String | Month in YYYY-MM format |
| `uploads_count` | Integer | Videos uploaded that month |
| `views_total` | Integer | Total views for the month |
| `likes_total` | Integer | Total likes for the month |
| `comments_total` | Integer | Total comments for the month |
| `avg_duration_seconds` | Float | Average video duration in seconds |
| `uploads_short_count` | Integer | Shorts uploaded that month |
| `views_shorts` | Integer | Views from Shorts |
| `uploads_shorts_share` | Float | Share of Shorts in uploads (0-1) |
| `uploads_shorts_share_per_month` | Float | Monthly Shorts ratio (0-1) |
| `percent_views_from_shorts_from_total` | Float | Percentage of views from Shorts (0-1) |
| `avg_views_per_video` | Float | Average views per video |
| `likes_per_1k_views` | Float | Likes per 1,000 views |
| `comments_per_1k_views` | Float | Comments per 1,000 views |
| `engagement_per_1k_views` | Float | Combined engagement metric |
| `views_mom_pct` | Float | Month-over-month growth rate (decimal) |
| `views_share_across_channels` | Float | Share of total views (0-1) |

### Sample Data
```csv
@CoComelon,2024-01,17,241956395,2671332,0,8,153229530.0,0.4706,0.6333
```

---

## 4. Short-form Youth Audience

**File:** `shortform_youth_audience.csv`
**Source:** TikTok demographic data
**Records:** 5 age groups

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `age_group` | String | Age range (18-24, 25-34, 35-44, 45-54, 55+) |
| `female_pct` | Float | Percentage of female users in age group |
| `male_pct` | Float | Percentage of male users in age group |

### Complete Data
```csv
age_group,female_pct,male_pct
18-24,14.1,16.6
25-34,14.6,20.7
35-44,7.2,9.2
45-54,4.3,4.9
55+,4.1,4.3
```

---

## 5. Social Media News Consumption

**File:** `PJ_2025.09.25_social-media-news_consumption-us-adults-data.csv`
**Source:** Pew Research Center
**Records:** 6 years (2020-2025)
**Survey Date:** August 18-24, 2025

### Fields

| Field | Type | Description |
|-------|------|-------------|
| Year | Integer | Survey year (2020-2025) |
| `Facebook` | Integer | % of adults getting news on Facebook |
| `YouTube` | Integer | % of adults getting news on YouTube |
| `Instagram` | Integer | % of adults getting news on Instagram |
| `TikTok` | Integer | % of adults getting news on TikTok |
| `X/Twitter` | Integer | % of adults getting news on X (formerly Twitter) |
| `Reddit` | Integer | % of adults getting news on Reddit |
| `Nextdoor` | Integer | % of adults getting news on Nextdoor |
| `WhatsApp` | Integer | % of adults getting news on WhatsApp |
| `Threads` | Integer | % of adults getting news on Threads (2024+) |
| `Truth Social` | Integer | % of adults getting news on Truth Social (2024+) |
| `Rumble` | Integer | % of adults getting news on Rumble (2024+) |
| `Bluesky` | Integer | % of adults getting news on Bluesky (2025+) |

**Note:** Percentages are among users of each platform, not all U.S. adults. Empty values indicate platform didn't exist or wasn't tracked that year.

### Complete Data
```csv
Year,Facebook,YouTube,Instagram,TikTok,X/Twitter,Reddit,Nextdoor,WhatsApp,Threads,Truth Social,Rumble,Bluesky
2020,36,23,11,3,15,6,,3,,,,
2021,31,22,11,6,13,7,,3,,,,
2022,31,25,13,10,14,8,4,3,,,,
2023,30,26,16,14,12,8,5,3,,,,
2024,33,32,20,17,12,8,5,5,,3,2,
2025,38,35,20,20,12,9,6,5,3,2,2,2
```

---

## 6. Annual Channel Summary (Dashboard)

**File:** `tbl_AnnualChannelSummary.csv`
**Source:** YouTube Data API v3
**Records:** 16 records (8 channels × 2 years: 2024, 2025 YTD)
**Time:** 2024 full year + 2025 YTD (January - October)

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `channelKey` | String | Channel handle |
| `year` | Integer | Year (2024 or 2025) |
| `is_ytd` | Boolean | Whether this is year-to-date (partial year) data |
| `total_uploads` | Integer | Total videos uploaded |
| `total_views` | Integer | Total views across all videos |
| `total_likes` | Integer | Total likes received |
| `total_comments` | Integer | Total comments received |
| `shorts_uploads` | Integer | Number of Shorts uploaded |
| `normal_uploads` | Integer | Number of regular (non-Short) videos |
| `views_from_shorts_total` | Integer | Total views from Shorts |
| `normal_views` | Integer | Total views from regular videos |
| `uploads_shorts_share` | Float | Proportion of uploads that are Shorts (0-1) |
| `percent_views_from_shorts_from_total` | Float | % of total views from Shorts (0-1) |
| `avg_duration_seconds` | Float | Average video duration in seconds |
| `avg_monthly_views` | Float | Average views per month |
| `likes_per_1k_views` | Float | Likes per 1,000 views |
| `comments_per_1k_views` | Float | Comments per 1,000 views |
| `shares_per_1k_views` | Float | Shares per 1,000 views (if available) |
| `engagement_per_1k_views` | Float | Combined engagement metric |
| `jan_views` through `dec_views` | Float | Monthly view breakdowns |

### Sample Data
```csv
@ESPN,2024,False,7083,1408414466,40569266,1593606,4303,2780,1144730168,263684298,0.6075,0.8128
@ESPN,2025,True,12843,2728395232,53206765,2292620,9572,3271,2287528212,440867020,0.7453,0.8384
```

**Note:** 2025 data is YTD (Year-To-Date) through October, not a full calendar year.

---

## 7. Monthly Channel Summary (Dashboard)

**File:** `tbl_MonthlyChannelSummary.csv`
**Source:** YouTube Data API v3
**Records:** ~128 records (8 channels × 16 months)
**Time:** May 2024 - October 2025

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `channelKey` | String | Channel handle |
| `year` | Integer | Year (2024 or 2025) |
| `month` | String | Month in YYYY-MM format |
| `uploads_count` | Integer | Total videos uploaded that month |
| `uploads_short_count` | Integer | Shorts uploaded that month |
| `uploads_normal` | Integer | Regular videos uploaded that month |
| `uploads_shorts_share` | Float | Share of Shorts in uploads (0-1) |
| `uploads_shorts_share_per_month` | Float | Monthly Shorts upload ratio (0-1) |
| `views_total` | Integer | Total views for the month |
| `views_shorts` | Float | Views from Shorts |
| `views_normal` | Float | Views from regular videos |
| `percent_views_from_shorts_from_total` | Float | % of views from Shorts (0-1) |
| `avg_views_per_video` | Float | Average views per video |
| `avg_duration_seconds` | Float | Average video duration in seconds |
| `likes_total` | Integer | Total likes for the month |
| `comments_total` | Integer | Total comments for the month |
| `likes_per_1k_views` | Float | Likes per 1,000 views |
| `comments_per_1k_views` | Float | Comments per 1,000 views |
| `shares_per_1k_views` | Float | Shares per 1,000 views (if available) |
| `engagement_per_1k_views` | Float | Combined engagement metric |
| `views_mom_pct` | Float | Month-over-month growth rate (decimal) |
| `views_share_across_channels` | Float | Share of total views across channels (0-1) |

### Sample Data
```csv
@ESPN,2024,2024-05,634,324,310,0.511,0.511,194748720,156592110.0,38156610.0,0.8041
@ESPN,2024,2024-06,1174,656,518,0.5588,0.5588,244532228,189224409.0,55307819.0,0.7738
```

---

## 8. Monthly Short vs Long Comparison

**File:** `tbl_MonthlyShortVsLong.csv`
**Source:** YouTube Data API v3
**Records:** ~128 records (8 channels × 16 months)
**Time:** May 2024 - October 2025

### Purpose
Detailed comparison of Short-form vs Long-form video performance metrics within each channel-month.

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `channelKey` | String | Channel handle |
| `year` | Integer | Year |
| `month` | String | Month in YYYY-MM format |
| **Normal (Long-form) Metrics** |
| `uploads_count_Normal` | Float | Regular videos uploaded |
| `views_total_Normal` | Float | Total views from regular videos |
| `likes_total_Normal` | Float | Total likes on regular videos |
| `comments_total_Normal` | Float | Total comments on regular videos |
| `likes_per_1k_views_Normal` | Float | Likes per 1k views (regular) |
| `comments_per_1k_views_Normal` | Float | Comments per 1k views (regular) |
| `engagement_per_1k_views_Normal` | Float | Engagement metric (regular) |
| `avg_views_per_video_Normal` | Float | Avg views per regular video |
| `avg_duration_seconds_Normal` | Float | Avg duration of regular videos |
| `views_mom_pct_Normal` | Float | Month-over-month growth (regular) |
| **Short-form Metrics** |
| `uploads_count_Short` | Float | Shorts uploaded |
| `views_total_Short` | Float | Total views from Shorts |
| `likes_total_Short` | Float | Total likes on Shorts |
| `comments_total_Short` | Float | Total comments on Shorts |
| `likes_per_1k_views_Short` | Float | Likes per 1k views (Shorts) |
| `comments_per_1k_views_Short` | Float | Comments per 1k views (Shorts) |
| `engagement_per_1k_views_Short` | Float | Engagement metric (Shorts) |
| `avg_views_per_video_Short` | Float | Avg views per Short |
| `avg_duration_seconds_Short` | Float | Avg duration of Shorts |
| `views_mom_pct_Short` | Float | Month-over-month growth (Shorts) |
| **Comparative Metrics** |
| `uploads_share_within_channel_month_Normal` | Float | % of uploads that are regular (0-1) |
| `uploads_share_within_channel_month_Short` | Float | % of uploads that are Shorts (0-1) |
| `views_share_within_channel_month_Normal` | Float | % of views from regular (0-1) |
| `views_share_within_channel_month_Short` | Float | % of views from Shorts (0-1) |
| `likes_per_1k_views_short_minus_normal` | Float | Difference in like rates |
| `likes_per_1k_views_short_div_normal` | Float | Ratio of Short/Normal like rates |
| `comments_per_1k_views_short_minus_normal` | Float | Difference in comment rates |
| `comments_per_1k_views_short_div_normal` | Float | Ratio of Short/Normal comment rates |
| `engagement_per_1k_views_short_minus_normal` | Float | Difference in engagement |
| `engagement_per_1k_views_short_div_normal` | Float | Ratio of engagement rates |
| `avg_views_per_video_short_minus_normal` | Float | Difference in avg views |
| `avg_views_per_video_short_div_normal` | Float | Ratio of avg views |

### Sample Data
```csv
@ESPN,2024,2024-05,310.0,324.0,38156610.0,156592110.0,411807.0,4796186.0,154479.0,73431.0,10.79,30.63,4.05,0.47
```

### Key Insights
This dataset enables detailed analysis of:
- **Performance gaps** between Shorts and regular content
- **Engagement rate differences** (Shorts typically have higher like rates)
- **View distribution** within each channel
- **Growth trajectories** for each content type

---

## Data Processing Notes

### Shorts Classification Heuristic

A YouTube video is classified as a Short if **either** condition is met:

1. Title or description contains `#Shorts` (case-insensitive)
2. Duration threshold:
   - Before 2024-10-15: ≤ 61 seconds
   - On/after 2024-10-15: ≤ 181 seconds

### Calculated Metrics

**Engagement per 1k views:**
```
(likes + comments) / views × 1000
```

**Month-over-month growth:**
```
(current_month_views - previous_month_views) / previous_month_views
```

---

## Data Limitations

- **TikTok data:** Estimates based on surveys, not exact counts
- **YouTube data:** View counts are snapshots; some channels disable likes/comments
- **Pew data:** Self-reported, percentages among platform users only
- **Shorts classification:** Heuristic-based, not official YouTube API flag
