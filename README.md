# Is Social Media Getting Shorter? (CS171 Final Project)

Team: Xiaoman Xu, Lingjie Pan, Paul Jeon

Harvard Fall 2025 CS171 Visualizations

This project investigates how short-form video (YouTube Shorts) factors into channel performance. We collect video-level data from the YouTube Data API, classify uploads as Shorts vs. Normal, and aggregate engagement metrics to compare across top creators and media brands. Our final visualization focuses on total views per channel and the share of those views coming from Shorts.

## Data & scope
Source: YouTube Data API v3

Channels analyzed (two sets):

Top creators: @MrBeast, @TSeries, @CoComelon, @SETIndia, @VladandNiki

Media brands: @NBA, @ESPN, @HouseofHighlights, @Vox, @nytimes, @Veritasium, @theoffice

Time window: 2024-01-01 -> 2024-12-31; 2025-01-01 -> 2025-10-31

Granularity: Video-level → monthly & YTD aggregations

## Data & scope ⚠️ Notes/limits
The public Data API does not expose “shares”; we use engagement_per_1k_views = (likes + comments)/views × 1000 as a proxy.

Like/comment counts can be disabled or delayed by creators; treat engagement rates as approximate.

View counts are dynamic (change over time). Analyses are a snapshot at collection time.

Shorts classification (our heuristic)

YouTube Shorts have platform-specific rules and UI cues, but the API doesn’t flag “Shorts” directly. We classify a video as Short if:

It contains #Shorts in the title or description, or

Duration threshold:

Before 2024-10-15: ≤ 61 seconds

On/after 2024-10-15: ≤ 181 seconds (reflecting YouTube's policy changes and longer short-form allowance on the platform)

We also store a check called is_short_by_duration (threshold-only) for sensitivity analysis.


## 🎨 Features

- **Page 1**: Interactive 3D globe showing TikTok users by country (2023-2025)
  - Draggable/rotatable globe
  - Year selector
  - Top 5 countries info panel
  - Color-coded by user count

- **Page 2**: YouTube channel composition analysis
  - Floating bubbles representing channels
  - Click to see Shorts vs Regular content breakdown
  - Interactive drag-and-drop layout

- **Page 3**: Top 5 YouTube Channels (2024)
  - Animated D3 line chart showing total monthly views per channel
  - Clear x-axis (Month 2024) and y-axis (Total Views in Billions)
  - Left-aligned bubble legend with profile avatars and channel names
  - Moving avatars that travel along each channel’s line to show changing performance
  - Interactive tooltips on hover displaying channel and view information

## 📁 Project Structure

```
CS171/
├── index.html                       # Main entry point (Sections 1–3)
├── README.md                        # Documentation
│
├── tiktok-users-by-country-2025.csv # TikTok user data
├── top_channels_2024_monthly_summary.csv  # YouTube Top 5 monthly data
├── top2024_annual_summary.csv       # YouTube annual data
│
├── css/
│   ├── main.css                     # Core layout + navigation
│   ├── globe.css                    # Section 1: TikTok Globe
│   ├── youtube.css                  # Section 2: Channel composition
│   └── youtube-top5.css             # Section 3: Top 5 YouTube Channels
│
└── js/
    ├── navigation.js                # Scroll + dot navigation
    ├── tiktok-globe.js              # Section 1 visualization
    ├── youtube-chart.js             # Section 2 visualization
    ├── youtube-top5.js              # Section 3 Top 5 chart (NEW)
    └── main.js                      # Global data loading + initialization
```

### 🔗 File Dependencies

```
index.html
    ├── CSS
    │   ├── css/main.css           (required – global layout & theme)
    │   ├── css/globe.css          (for Section 1: TikTok Globe)
    │   ├── css/youtube.css        (for Section 2: YouTube Composition)
    │   └── css/youtube-top5.css   (for Section 3: Top 5 YouTube Channels)
    │
    └── JavaScript (load order matters!)
        ├── D3.js libraries (CDN)
        ├── js/navigation.js        (scroll navigation & section control)
        ├── js/tiktok-globe.js      (Section 1: TikTok 3D Globe)
        ├── js/youtube-chart.js     (Section 2: Channel Composition)
        ├── js/youtube-top5.js      (Section 3: Top 5 YouTube Channels)
        └── js/main.js              (data loading & initialization – must be last)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Quick Start

1. **Direct Open** (may have CORS issues):
   ```
   Simply open index.html in your browser
   ```

2. **Using Python Server** (recommended):
   ```bash
   # Python 3
   cd /path/to/CS171
   python -m http.server 8000
   # Then open http://localhost:8000
   ```

3. **Using Node.js Server**:
   ```bash
   npx http-server -p 8000
   # Then open http://localhost:8000
   ```

## 📂 File Details

### CSS Files

- **main.css**: Core styling including:
  - Body and layout styles
  - Hand-drawn border effects
  - Navigation dots
  - Responsive design
  - Loading animations

- **globe.css**: TikTok globe specific styles:
  - Country path styling
  - Tooltip design
  - Year selector
  - Legend and info panel

- **youtube.css**: YouTube chart specific styles:
  - Circle/bubble styling
  - Pie chart slices
  - Label formatting
  - Hover effects

### JavaScript Files

- **navigation.js**: Handles scroll-based navigation:
  - Updates navigation dots based on scroll position
  - Smooth scrolling between sections
  - Click handlers for dot navigation

- **tiktok-globe.js**: TikTok globe visualization:
  - `TikTokGlobeVis` class
  - D3.js orthographic projection
  - Data wrangling and color scales
  - Interactive features (drag, hover, year selection)

- **youtube-chart.js**: YouTube channel visualization:
  - `initYouTubeVis` function
  - Force-directed layout
  - Circle-to-pie chart transitions
  - Drag interactions

- **main.js**: Application initialization:
  - Loads all data files
  - Initializes both visualizations
  - Error handling

## 🎯 Navigation

- **Scroll**: Use mouse wheel or trackpad to navigate between pages
- **Navigation Dots**: Click the dots on the right side to jump to specific pages
- **Keyboard**: Use arrow keys or Page Up/Down (browser default)

## 🎨 Design Theme

The project follows a cohesive design inspired by hand-drawn aesthetics:

### Colors
- Background: `#393A4C` (dark blue-gray)
- Accent: `#fff4d6` (cream/beige)
- Primary: `#ff6b6b` (coral red)
- Secondary: `#4ecdc4` (turquoise)
- Container: `#2F2F4C` (slightly lighter blue-gray)

### Fonts
- Primary: `'Architects Daughter', cursive` (Google Fonts)

### Effects
- Hand-drawn style borders with irregular corners
- Smooth transitions
- Drop shadows

## 📊 Data Sources

- **TikTok Data**: `tiktok-users-by-country-2025.csv`
  - Contains user counts for 2023, 2024, and 2025
  - Includes country codes and names

- **YouTube Data**: `top2024_annual_summary.csv`, `top_channels_2024_monthly_summary.csv`
  - Top YouTube channels in 2024
  - Metrics: total uploads, shorts, regular videos, views

## 🔧 Customization

### Adding More Pages

1. **HTML** (index.html):
   ```html
   <!-- Add after section2 -->
   <div class="row full-height">
       <div class="section-container section3">
           <h3>New Section Title</h3>
           <div id="newVis" class="placeholder"></div>
       </div>
   </div>
   ```

2. **Add Navigation Dot**:
   ```html
   <ul class="navigation_dots">
       <li class="selected"></li>
       <li></li>
       <li></li> <!-- Add this -->
   </ul>
   ```

3. **CSS** (create css/new-section.css):
   ```css
   #newVis {
       /* Your styles */
   }
   ```

4. **JavaScript** (create js/new-section.js):
   ```javascript
   function initNewVis(data) {
       // Your visualization code
   }
   ```

5. **Update navigation.js**:
   ```javascript
   const sections = document.querySelectorAll('.section1, .section2, .section3');
   ```

6. **Link in HTML**:
   ```html
   <link rel="stylesheet" href="css/new-section.css">
   <script src="js/new-section.js"></script>
   ```

### Changing Colors

Edit the CSS files:
- Background: Change `#393A4C` in `main.css`
- Accent color: Change `#fff4d6` throughout
- Visualization colors: Update in respective CSS files

## 🔍 Code Organization Principles

### CSS Organization
- **main.css**: Shared styles used across all sections
- **[section].css**: Section-specific styles
- Use clear class names with prefixes (e.g., `.globe-tooltip`, `.channel-circle`)

### JavaScript Organization
- **navigation.js**: Pure navigation logic, no visualization code
- **[section].js**: Complete visualization logic for one section
- **main.js**: Only data loading and initialization
- Each file has a clear, single responsibility

### Benefits
- Easy to find specific code
- Easy to add new sections
- Easy to modify individual sections
- Clear dependencies
- Modular and maintainable

## 🐛 Troubleshooting

### Data Not Loading
- Make sure you're using a local server (not file://)
- Check that CSV files are in the correct location
- Open browser console (F12) to see error messages

### Navigation Dots Not Working
- Ensure section classes match in HTML and navigation.js
- Check browser console for JavaScript errors

### Visualization Not Appearing
- Verify D3.js libraries are loaded
- Check that data files exist and are accessible
- Ensure all JS files are loaded in the correct order

## 🎓 Learning Resources

### D3.js
- [D3.js Documentation](https://d3js.org/)
- [D3 Graph Gallery](https://d3-graph-gallery.com/)

### TopoJSON
- [TopoJSON Documentation](https://github.com/topojson/topojson)

### Force Layout
- [D3 Force Layout](https://d3js.org/d3-force)

## 💡 Tips

- Always test with a local server, not file://
- Check browser console for errors
- Keep data files in the correct relative paths
- Maintain consistent naming conventions
- Comment complex D3 code
- Test on different screen sizes

## 📝 License

This project is for educational purposes.

## 🙏 Acknowledgments

- Design inspired by MBTI-Music project
- Built with D3.js
- Uses TopoJSON for geographic data

---

**Last Updated**: 2025-11-05

**Version**: 1.1

