# Integration Guide: Adding Dashboard to Your Slide Deck

This guide shows how to integrate the Media Dashboard slide into your existing HTML slide-based website (between slides 3 and 4).

## Quick Start

### 1. Install and Build

```bash
cd /Users/pauljeon/CS171/dashboard
npm install
npm run build
```

This creates a production bundle in `/Users/pauljeon/CS171/dashboard-dist/`.

### 2. Add to index.html

Add this section between Slide 3 and Slide 4 in your `index.html`:

```html
<!-- Slide 3.5: Interactive Media Dashboard -->
<section class="slide-section dashboard-slide" id="dashboard">
    <div id="media-dashboard-root"></div>
</section>
```

### 3. Load React and Dashboard Bundle

Add these scripts before the closing `</body>` tag:

```html
<!-- React Dependencies (if not already loaded) -->
<script crossorigin src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>

<!-- Recharts for charts -->
<script src="https://unpkg.com/recharts@2.10.3/dist/Recharts.js"></script>

<!-- Dashboard Bundle -->
<script src="dashboard-dist/media-dashboard.umd.js"></script>

<!-- Initialize Dashboard -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const dashboardRoot = document.getElementById('media-dashboard-root');
    if (dashboardRoot && typeof MediaDashboardSlide !== 'undefined') {
      const root = ReactDOM.createRoot(dashboardRoot);
      root.render(React.createElement(MediaDashboardSlide.default || MediaDashboardSlide));
    }
  });
</script>
```

### 4. Update Navigation

Update your navigation dots in `index.html`:

```html
<ul class="navigation_dots" role="navigation" aria-label="Section navigation">
    <li class="selected" aria-label="Slide 1: The Shift to Short"></li>
    <li aria-label="Slide 2: Global Reach"></li>
    <li aria-label="Slide 3: Content Is Getting Shorter"></li>
    <li aria-label="Slide 3.5: Interactive Dashboard"></li> <!-- NEW -->
    <li aria-label="Slide 4: A New Playbook"></li>
    <!-- ... rest of slides ... -->
</ul>
```

## Alternative: Development Mode

For development and testing, you can run the dashboard standalone:

```bash
cd dashboard
npm run dev
```

Visit `http://localhost:3000` to see the dashboard in isolation.

## Styling Integration

The dashboard is designed to match your existing design system:

### Colors Used
- Background: `linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)`
- Text: `#EDEFF3`
- Muted: `#A4ADBD`
- Primary: `#4488FF`
- Accent: `#FFB344`
- Shorts: `#FF4444`

### Fonts Used
- Headings: `"Newsreader", serif`
- Body: `"Inter", sans-serif`

These should already be loaded in your main site. If not, add to `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:wght@400;700;800&display=swap" rel="stylesheet">
```

## Data Files Location

Ensure these CSV files are in your project root (`/Users/pauljeon/CS171/`):

1. ✅ `top2024_annual_summary.csv` - Already exists
2. ✅ `top_channels_2024_monthly_summary.csv` - Already exists
3. ⚠️ `tbl_MonthlyShortVsLong.csv` - Optional (currently derived from monthly data)

The dashboard fetches these files via:
- `/top2024_annual_summary.csv`
- `/top_channels_2024_monthly_summary.csv`

## Timeline Integration

If you're using the narrative timeline (which you are), update `js/timeline.js` to include the dashboard slide:

```javascript
const slides = [
    { id: 'landing', title: 'Landing' },
    { id: 'slide1', title: 'The Shift to Short' },
    { id: 'slide2', title: 'Global Reach' },
    { id: 'slide3', title: 'Content Is Getting Shorter' },
    { id: 'dashboard', title: 'Interactive Dashboard' }, // NEW
    { id: 'slide4', title: 'A New Playbook' },
    // ... rest
];
```

## Full HTML Example

Here's what the relevant section of your `index.html` should look like:

```html
<!-- Slide 3: Content Is Getting Shorter -->
<section class="slide-section slide3" id="slide3">
    <div class="slide-container">
        <h2 class="slide-title">Content Is Getting Shorter</h2>
        <div class="slide-body">
            <p>Across top influencers, brands, and media companies, average video length is trending down.</p>
            <p>However, the quantity of videos is on an upward trajectory.</p>
            <p>Shorter run times let viewers sample more content in less time--and keep scrolling.</p>
            <p>The new default is fast, frequent, and highly visual, giving a taste of what the brand has to offer.</p>
        </div>
    </div>
</section>

<!-- NEW: Slide 3.5: Interactive Media Dashboard -->
<section class="slide-section dashboard-slide" id="dashboard">
    <div id="media-dashboard-root"></div>
</section>

<!-- Slide 4: A New Playbook -->
<section class="slide-section slide4" id="slide4">
    <!-- ... existing slide 4 content ... -->
</section>
```

## Troubleshooting

### Dashboard not appearing
1. Check browser console for errors
2. Verify bundle was built: `ls dashboard-dist/`
3. Check that React and ReactDOM are loaded
4. Ensure CSV files are accessible (check Network tab)

### Styling looks off
1. Make sure fonts are loaded
2. Check for CSS conflicts with class names
3. Verify viewport is set correctly: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### Data not loading
1. Check CSV files are in the right location
2. Open Network tab to see if fetch succeeds
3. Check CORS if serving from different origin
4. Verify CSV format matches expected structure

### Navigation doesn't work
1. Update navigation dots count
2. Update timeline configuration
3. Check if slide ID matches `#dashboard`

## Testing Checklist

- [ ] Dashboard renders on page load
- [ ] Year selector switches between 2024/2025
- [ ] Channel checkboxes filter data correctly
- [ ] View mode tabs switch between Overview/Drilldown/Short vs Long
- [ ] Charts display data accurately
- [ ] KPI cards show aggregated metrics
- [ ] Tooltips appear on hover
- [ ] Responsive on mobile (controls stack on top)
- [ ] Navigation dots include dashboard
- [ ] Timeline shows dashboard entry
- [ ] Scrolling works within dashboard
- [ ] No console errors

## Performance Tips

1. **Lazy Load**: Only initialize dashboard when slide becomes visible
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id === 'dashboard') {
      initializeDashboard();
    }
  });
});
observer.observe(document.getElementById('dashboard'));
```

2. **Preload Data**: Fetch CSV files earlier in page load
```javascript
// In <head>
<link rel="preload" href="/top2024_annual_summary.csv" as="fetch" crossorigin>
<link rel="preload" href="/top_channels_2024_monthly_summary.csv" as="fetch" crossorigin>
```

3. **Bundle Size**: If bundle is too large, consider code splitting with dynamic imports

## Need Help?

- Check `dashboard/README.md` for detailed component documentation
- Review `dashboard/dataLoader.ts` to understand data format expectations
- Look at `dashboard/types.ts` for TypeScript interfaces
- Examine component files in `dashboard/components/` for specific chart implementations

