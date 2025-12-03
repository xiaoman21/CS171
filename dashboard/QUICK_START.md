# Quick Start: Media Dashboard

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
cd /Users/pauljeon/CS171/dashboard
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` to see the dashboard.

### 3. Explore the Dashboard

- **Toggle Years**: Switch between 2024 and 2025 YTD
- **Select Channels**: Choose which channels to analyze
- **Switch Views**:
  - **Overview**: See aggregated metrics across all selected channels
  - **Channel Drill-down**: Deep dive into one channel's monthly trends
  - **Short vs Long**: Compare short-form vs long-form performance

## 📊 What You'll See

### Overview Mode
- Total views, uploads, and shorts share across channels
- Bar charts comparing channel performance
- Scatter plot showing shorts investment vs returns

### Channel Drill-down Mode
- Monthly view trends with shorts vs normal breakdown
- Upload patterns over time
- Shorts share evolution

### Short vs Long Mode
- Average views per video comparison
- Performance multiplier (how much better/worse shorts perform)
- Duration vs performance scatter plots

## 🎨 Customization

### Change Colors

Edit `components/*.tsx`:
```typescript
const COLORS = {
  shorts: '#FF4444',  // Change this
  normal: '#4488FF',  // And this
};
```

### Modify Styling

Edit `styles.css`:
```css
.dashboard-title {
  color: #EDEFF3; /* Your color here */
  font-size: clamp(28px, 4vw, 48px); /* Adjust sizing */
}
```

### Add New Chart

1. Create new component in `components/`
2. Import Recharts components
3. Add to appropriate view mode component
4. Style in `styles.css`

## 🔧 Build for Production

```bash
npm run build
```

Output goes to `../dashboard-dist/media-dashboard.umd.js`

See `INTEGRATION_GUIDE.md` for how to integrate into your site.

## 📁 File Structure

```
dashboard/
├── MediaDashboardSlide.tsx       ← Main component (START HERE)
├── components/
│   ├── DashboardControls.tsx     ← Sidebar filters
│   ├── OverviewCharts.tsx        ← Overview mode charts
│   ├── ChannelDrilldownCharts.tsx ← Drill-down charts
│   └── ShortVsLongCharts.tsx     ← Comparison charts
├── dataLoader.ts                 ← Fetches and parses CSVs
├── types.ts                      ← TypeScript interfaces
├── utils.ts                      ← Helper functions
└── styles.css                    ← All styling
```

## 🐛 Troubleshooting

**Dashboard is blank?**
- Check console for errors
- Verify CSV files exist in parent directory
- Make sure ports aren't blocked

**Charts not showing?**
- `npm install` completed successfully?
- Check that `recharts` is installed
- Reload the page

**Styling looks off?**
- Fonts loaded? (Newsreader, Inter)
- Browser supports CSS grid and flexbox?
- Try hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

## 📚 Learn More

- **Full Documentation**: See `README.md`
- **Integration Guide**: See `INTEGRATION_GUIDE.md`
- **Data Structure**: See `types.ts`
- **Recharts Docs**: https://recharts.org/

## 🎯 Next Steps

1. ✅ Get dev server running
2. ✅ Explore all three view modes
3. ✅ Try filtering by different channels
4. ✅ Build for production
5. ✅ Integrate into main site (see INTEGRATION_GUIDE.md)

Happy dashboarding! 📈

