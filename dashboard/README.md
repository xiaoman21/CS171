# Media Dashboard Slide

Interactive media analytics dashboard for exploring YouTube channel data. This component provides comprehensive visualizations for short-form vs long-form video performance.

## Features

### Overview Mode
- **KPI Cards**: Total views, uploads, shorts share
- **Views by Channel**: Bar chart comparing total views
- **Uploads/Views Comparison**: Stacked bars showing shorts vs normal content
- **Shorts Supply vs Impact**: Scatter plot showing relationship between shorts production and viewership

### Channel Drill-down Mode
- **Monthly Views Trends**: Line chart showing views over time
- **Monthly Uploads**: Stacked bar chart by content type
- **Shorts Share Evolution**: Dual-line chart tracking shorts percentage

### Short vs Long Mode
- **Average Views Comparison**: Grouped bars for shorts vs normal
- **Performance Multiplier**: How much better/worse shorts perform
- **Duration vs Performance**: Scatter plot exploring video length impact

## Project Structure

```
dashboard/
├── MediaDashboardSlide.tsx    # Main component
├── types.ts                    # TypeScript type definitions
├── dataLoader.ts               # Data loading and parsing
├── utils.ts                    # Utility functions
├── styles.css                  # Component styling
├── components/
│   ├── DashboardControls.tsx   # Sidebar controls
│   ├── OverviewCharts.tsx      # Overview visualizations
│   ├── ChannelDrilldownCharts.tsx  # Channel drill-down
│   └── ShortVsLongCharts.tsx   # Short vs long analysis
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite build config
└── README.md                   # This file
```

## Installation

### Development Setup

1. **Install dependencies:**
```bash
cd dashboard
npm install
```

2. **Run development server:**
```bash
npm run dev
```

This will start a dev server at `http://localhost:3000` where you can test the dashboard in isolation.

3. **Build for production:**
```bash
npm run build
```

This creates a production-ready bundle in `../dashboard-dist/`.

## Data Requirements

The dashboard expects three CSV files in the project root:

1. **top2024_annual_summary.csv** (Annual Channel Summary)
   - One row per channel per year
   - Columns: channelKey, total_uploads, shorts_uploads, total_views, views_from_shorts_total, engagement metrics, monthly views

2. **top_channels_2024_monthly_summary.csv** (Monthly Channel Summary)
   - One row per channel per month
   - Columns: channelKey, month (YYYY-MM), uploads_count, views_total, shorts/normal breakdowns, engagement metrics

3. **tbl_MonthlyShortVsLong.csv** (Short vs Long Comparison) - OPTIONAL
   - One row per channel per month with pivoted Normal/Short metrics
   - Currently derived from monthly summary if not present

## Integration into Existing Site

### Option 1: As a React Component (Recommended)

If your site already uses React, import and use the component directly:

```tsx
import MediaDashboardSlide from './dashboard/MediaDashboardSlide';

function App() {
  return (
    <div>
      {/* Your other slides */}
      <MediaDashboardSlide />
      {/* More slides */}
    </div>
  );
}
```

### Option 2: Build and Embed

If your site uses vanilla HTML/JS, build the component and embed it:

1. Build the dashboard:
```bash
cd dashboard && npm run build
```

2. Add to your HTML between slides 3 and 4:
```html
<!-- Load React and ReactDOM from CDN -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Dashboard container -->
<div id="media-dashboard-root"></div>

<!-- Load dashboard bundle -->
<script src="dashboard-dist/media-dashboard.umd.js"></script>
<script>
  const root = ReactDOM.createRoot(document.getElementById('media-dashboard-root'));
  root.render(React.createElement(MediaDashboardSlide));
</script>
```

### Option 3: Iframe Embed

For complete isolation, serve the dashboard separately and embed as iframe:

```html
<section class="slide-section dashboard-slide">
  <iframe 
    src="/dashboard/index.html" 
    style="width: 100%; height: 100vh; border: none;"
  ></iframe>
</section>
```

## Customization

### Styling

All styles are in `styles.css`. Key CSS variables match your existing design system:
- `--text: #EDEFF3`
- `--muted: #A4ADBD`
- Background: `linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)`

### Colors

Chart colors are defined in each chart component:
```typescript
const COLORS = {
  shorts: '#FF4444',    // Red for shorts
  normal: '#4488FF',    // Blue for normal videos
};
```

Modify these to match your brand.

### Data Source

To change data sources, edit `dataLoader.ts`:
- Update fetch URLs
- Modify parsing logic
- Adjust type mappings

## Technology Stack

- **React 18** - Component framework
- **TypeScript** - Type safety
- **Recharts** - Charting library
- **Vite** - Build tool and dev server

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

## Performance

- Lazy loads data on mount
- Responsive charts adapt to container size
- Efficient re-rendering with React memoization
- CSV parsing happens once on load

## Troubleshooting

### "No data available"
- Check that CSV files are in the correct location
- Verify CSV file names match what's in `dataLoader.ts`
- Open browser console to see fetch errors

### Charts not rendering
- Ensure Recharts is installed: `npm install recharts`
- Check browser console for errors
- Verify data structure matches TypeScript types

### Styling conflicts
- Dashboard uses scoped class names starting with `dashboard-`
- If conflicts occur, increase CSS specificity or use CSS modules

## Future Enhancements

- [ ] Export charts as images
- [ ] Date range picker for custom periods
- [ ] Comparison mode (multiple years side-by-side)
- [ ] Animation on chart load
- [ ] Download data as CSV
- [ ] Share dashboard state via URL
- [ ] Mobile touch gestures for navigation

## License

Part of CS171 Final Project

