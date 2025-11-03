# TikTok & YouTube Global Visualization

A multi-page visualization project showcasing TikTok user distribution globally and YouTube channel analytics.

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

## 📁 Project Structure

```
page2/
├── index.html                          # Main entry point
├── css/
│   ├── main.css                        # Core styles (layout, navigation, common elements)
│   ├── globe.css                       # TikTok globe visualization styles
│   └── youtube.css                     # YouTube chart visualization styles
├── js/
│   ├── navigation.js                   # Scroll navigation and dots system
│   ├── tiktok-globe.js                # TikTok globe visualization class
│   ├── youtube-chart.js               # YouTube channel visualization
│   └── main.js                         # Data loading and initialization
├── page3/
│   └── top2024_annual_summary.csv     # YouTube data
├── tiktok-users-by-country-2025.csv   # TikTok data
└── README.md                           # This file
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
   cd /path/to/page2
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
- Dark background (#393A4C)
- Hand-drawn style borders with irregular corners
- Architects Daughter font for a casual, hand-written feel
- Consistent color palette (#fff4d6, #ff6b6b, #4ecdc4)

## 📊 Data Sources

- **TikTok Data**: `tiktok-users-by-country-2025.csv`
  - Contains user counts for 2023, 2024, and 2025
  - Includes country codes and names

- **YouTube Data**: `page3/top2024_annual_summary.csv`
  - Top YouTube channels in 2024
  - Metrics: total uploads, shorts, regular videos, views

## 🔧 Customization

### Adding More Pages

1. Add a new section in `index.html`:
   ```html
   <div class="row full-height">
       <div class="section-container section3">
           <h3>Your Title</h3>
           <div id="yourVis" class="placeholder"></div>
       </div>
   </div>
   ```

2. Add a navigation dot:
   ```html
   <ul class="navigation_dots">
       <li class="selected"></li>
       <li></li>
       <li></li> <!-- New dot -->
   </ul>
   ```

3. Update `js/navigation.js` to include `.section3`

4. Create your visualization in a new JS file

### Changing Colors

Edit the CSS files:
- Background: Change `#393A4C` in `main.css`
- Accent color: Change `#fff4d6` throughout
- Visualization colors: Update in respective CSS files

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

## 📝 License

This project is for educational purposes.

## 🙏 Acknowledgments

- Design inspired by MBTI-Music project
- Built with D3.js
- Uses TopoJSON for geographic data