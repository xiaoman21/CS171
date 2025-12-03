# Are Videos Getting Shorter? (CS171 Final Project)

**Team:** Xiaoman Xu, Lingjie Pan, Paul Jeon

**Course:** Harvard Fall 2025 CS171 Visualizations

This project investigates how short-form video is reshaping media and news consumption. Through interactive visualizations, we explore YouTube Shorts performance, TikTok's global reach, and how social media platforms are becoming primary news sources. We analyze video-level data from the YouTube Data API, classify uploads as Shorts vs. Normal, and compare engagement metrics across top creators and media brands.

## 🚀 Quick Start

**To run this project:**

```bash
# 1. Navigate to the project directory
cd /path/to/CS171

# 2. Start a local web server
python3 -m http.server 8000

# 3. Open in browser
# Visit: http://localhost:8000
```
or you can also use lifeserver to run it

**Requirements:**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Python 3, Node.js, or PHP)
- **No npm install needed** - all libraries loaded via CDN

**Used Technologies:**
- **D3.js v7** - Data visualization
- **TopoJSON** - Geographic data
- **Google Fonts** - Inter & Newsreader
---

## 📖 Table of Contents

- [Quick Start](#-quick-start)
- [Data & Scope](#data--scope)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Libraries & Dependencies](#-libraries--dependencies)
- [Getting Started](#-getting-started-1)
- [Design System](#-design-system)
- [Key Components](#-key-components)
- [Data Sources & Files](#-data-sources--files)
- [Development Guide](#-development-guide)
- [Troubleshooting](#-troubleshooting)
- [Learning Resources](#-learning-resources)
- [Technical Details](#-technical-details)

---

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

The project contains 14 interactive slides exploring the shift to short-form content:

- **Slide 1**: The Shift to Short - Embedded YouTube Shorts demonstration
- **Slide 2**: Global Reach - Interactive 3D globe showing TikTok users by country (2023-2025)
  - Draggable/rotatable globe using D3.js orthographic projection
  - Year selector to view temporal changes
  - Top 5 countries info panel
  - Color-coded by user count
- **Slide 3**: Content Is Getting Shorter - Narrative explanation
- **Slide 4**: A New Playbook for Brands & Media - Strategic insights
- **Slide 5**: Channel Performance - YouTube channel composition analysis
  - Floating bubbles representing channels (force-directed layout)
  - Click to see Shorts vs Regular content breakdown with animated transitions
  - Interactive drag-and-drop layout
- **Slide 6**: Monthly View Trends - Top 5 YouTube Channels (2024)
  - Animated D3 line chart showing total monthly views
  - Bubble legend with channel profile avatars
  - Moving avatars that travel along performance lines
  - Interactive tooltips on hover
- **Slide 7**: Shorts Ignite Long-Form - Long/Short content interaction
  - Avatar slider to select creators
  - Combined view of Shorts and long-form video performance
  - Promo month and rising slope indicators
  - Interactive legend toggles
- **Slide 8**: Where People Get News (2020–2025)
  - Animated D3 line chart with sequential text reveals
  - Pew Research Center data visualization
  - Toggle to show percentage-point changes
  - Platform-specific text highlights
- **Slide 9**: Campaigns in the Social Era - NYC campaign case study
- **Slide 10**: Quote - Ritchie Torres quote on modern communication
- **Slide 11**: Why This Matters - Media literacy insights
- **Slide 12**: Conclusion - Key takeaways
- **Slide 13**: Credits - Team and data sources

## 📁 Project Structure

```
CS171/
├── index.html                                      # Main entry point (all slides)
├── README.md                                       # Documentation
├── build_social_news_interactive.py               # Python script to generate Plotly viz
│
├── Data files:
├── tiktok-users-by-country-2025.csv               # TikTok user data (2023-2025)
├── top_channels_2024_monthly_summary.csv          # YouTube monthly view data
├── top2024_annual_summary.csv                     # YouTube annual summary
├── shortform_youth_audience.csv                   # Young audience data
├── PJ_2025.09.25_social-media-news_consumption-us-adults-data.csv  # Pew news data
├── social_news_interactive.html                   # Generated Plotly visualization
│
├── css/                              # Stylesheets (modular by feature)
│   ├── design-system.css             # Global design tokens and theme
│   ├── landing.css                   # Landing page styles
│   ├── slide-layout.css              # Slide container layouts
│   ├── globe.css                     # TikTok Globe (Slide 2)
│   ├── youtube.css                   # Channel composition (Slide 5)
│   ├── youtube-top5.css              # Monthly trends (Slide 6)
│   ├── youtube-longshort-combined.css # Long/Short interaction (Slide 7)
│   ├── youtube-sliding-panels.css    # Sliding panels component
│   ├── slide6-animation.css          # News consumption slide (Slide 8)
│   ├── social-news.css               # Social news styles
│   ├── young-audience.css            # Young audience styles
│   └── slide7-animation.css          # Campaign slide animations
│
├── js/                               # JavaScript modules (one per feature)
│   ├── landing.js                    # Landing page animations
│   ├── navigation.js                 # Scroll navigation & dot controls
│   ├── timeline.js                   # Narrative timeline
│   ├── animations.js                 # Global animation utilities
│   ├── tiktok-globe.js              # TikTok Globe visualization (Slide 2)
│   ├── youtube-chart.js             # Channel composition (Slide 5)
│   ├── youtube-top5.js              # Monthly trends chart (Slide 6)
│   ├── youtube-longshort-combined.js # Long/Short interaction (Slide 7)
│   ├── youtube-sliding-panels.js    # Sliding panels component
│   ├── slide6-animation.js          # News consumption animation (Slide 8)
│   ├── young-audience.js            # Young audience visualization
│   ├── pew-reset.js                 # Pew data reset utilities
│   ├── explanation-cards.js         # Pop-up explanation cards
│   └── main.js                      # Data loading + initialization (must load last)
│
└── assets/
    └── profile_pics/                # Channel avatars and campaign images
```

## 📚 Libraries & Dependencies

### JavaScript Libraries (CDN)
All external libraries are loaded via CDN - no npm install required:

- **D3.js v7** - Core visualization library
  - `https://d3js.org/d3.v7.min.js`
  - `https://d3js.org/d3-scale-chromatic.v1.min.js`
  - `https://d3js.org/topojson.v2.min.js`
  - `https://d3js.org/d3-geo.v1.min.js`

### Fonts (Google Fonts CDN)
- **Inter** (weights: 400, 500, 700, 900) - Body text and UI elements
- **Newsreader** (weights: 600, 700, 800) - Headlines and titles

### Python Dependencies (for generating Plotly visualization)
Only needed if regenerating `social_news_interactive.html`:

```bash
pandas      # Data manipulation
plotly      # Interactive plotting
```

**Installation:**
```bash
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install pandas plotly
```

## 🚀 Getting Started

### Prerequisites
- **Modern web browser** (Chrome, Firefox, Safari, or Edge)
- **Local web server** (required for loading CSV files)
- **Python 3.7+** (optional, only needed to regenerate Plotly visualization)

### Quick Start

**Option 1: Using Python HTTP Server** (recommended)
```bash
cd /path/to/CS171
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser

**Option 2: Using Node.js HTTP Server**
```bash
cd /path/to/CS171
npx http-server -p 8000
```
Then open http://localhost:8000 in your browser

**Option 3: Using PHP Server**
```bash
cd /path/to/CS171
php -S localhost:8000
```
Then open http://localhost:8000 in your browser

### Why You Need a Local Server
Opening `index.html` directly (`file://`) will cause CORS errors when loading CSV files. The browser's security policy prevents JavaScript from loading local files without a web server.

### Navigation
- **Scroll**: Use mouse wheel, trackpad, or arrow keys to navigate between slides
- **Navigation Dots**: Click dots on the right side to jump to specific slides
- **Progress Bar**: View your position in the presentation at the top of the page

## 🎨 Design System

The project uses a modern, professional design system defined in [design-system.css](css/design-system.css):

### Color Palette
- **Background**: `#0E0F12` (dark charcoal) - Main background
- **Surface**: `#15171B` (dark gray) - Card/container backgrounds
- **Text Primary**: `#EDEFF3` (off-white) - Main text
- **Text Secondary**: `#A4ADBD` (light gray) - Secondary text
- **Accent Colors**: Platform-specific (YouTube red, Instagram gradient, TikTok cyan, etc.)

### Typography
- **Headlines**: `'Newsreader', serif` (weights: 600, 700, 800)
- **Body & UI**: `'Inter', sans-serif` (weights: 400, 500, 700, 900)
- **Scale**: Responsive fluid typography using clamp()

### Design Principles
- **Modular CSS**: Each slide has its own stylesheet
- **Smooth animations**: CSS transitions and D3 animations
- **Accessibility**: ARIA labels, semantic HTML
- **Responsive**: Adapts to different screen sizes

## 📂 Key Components

### JavaScript Modules

- **[main.js](js/main.js)**: Core initialization
  - Loads all CSV data files using D3.csv()
  - Initializes visualizations in correct order
  - Error handling and loading states

- **[navigation.js](js/navigation.js)**: Scroll navigation
  - Tracks scroll position
  - Updates navigation dots
  - Handles smooth scrolling between slides

- **[landing.js](js/landing.js)**: Landing page
  - Animated title reveal
  - Scroll-down indicator
  - Transition to main content

- **[tiktok-globe.js](js/tiktok-globe.js)**: 3D Globe (Slide 2)
  - D3 orthographic projection
  - TopoJSON for country boundaries
  - Interactive drag rotation
  - Year selector

- **[youtube-chart.js](js/youtube-chart.js)**: Channel bubbles (Slide 5)
  - D3 force simulation for layout
  - Circle-to-pie chart transitions
  - Click interactions

- **[youtube-top5.js](js/youtube-top5.js)**: Monthly trends (Slide 6)
  - Animated line chart
  - Moving avatars along trend lines
  - Interactive tooltips

- **[youtube-longshort-combined.js](js/youtube-longshort-combined.js)**: Long/Short interaction (Slide 7)
  - Creator avatar slider
  - Combined bar/line charts
  - Legend toggles for promo months and slope indicators

- **[slide6-animation.js](js/slide6-animation.js)**: News consumption (Slide 8)
  - Animated line chart with sequential reveals
  - Intersection Observer for scroll-triggered animations
  - Toggle between trend lines and change bars

- **[timeline.js](js/timeline.js)**: Narrative timeline
  - Progress indicator
  - Section titles
  - Click navigation

## 📊 Data Sources & Files

### Data Files

1. **`tiktok-users-by-country-2025.csv`**
   - TikTok user counts by country for 2023, 2024, and 2025
   - Includes country codes and names
   - Used in Slide 2 (Global Reach)

2. **`top2024_annual_summary.csv`**
   - Annual YouTube channel statistics for 2024
   - Metrics: total uploads, shorts count, regular videos, total views
   - Used in Slide 5 (Channel Performance)

3. **`top_channels_2024_monthly_summary.csv`**
   - Monthly view data for top YouTube channels throughout 2024
   - Used in Slide 6 (Monthly View Trends)

4. **`shortform_youth_audience.csv`**
   - Young audience engagement data
   - Used for youth-focused visualizations

5. **`PJ_2025.09.25_social-media-news_consumption-us-adults-data.csv`**
   - Pew Research Center data
   - Percentage of U.S. adults regularly getting news on social platforms (2020-2025)
   - Platforms: YouTube, Instagram, TikTok, X/Twitter, Facebook, etc.
   - Used in Slide 8 (Where People Get News)


## 🔧 Development Guide

### Code Organization Principles

The project follows a **modular architecture**:

1. **One feature = One CSS file + One JS file**
   - Example: `youtube-top5.css` + `youtube-top5.js` for the monthly trends chart
   - Makes it easy to locate and modify specific features

2. **Separation of Concerns**
   - `navigation.js`: Only scroll navigation logic
   - `landing.js`: Only landing page behavior
   - `main.js`: Only data loading and initialization (must load last)
   - Visualization files: Only their specific D3 visualizations

3. **CSS Cascade**
   - `design-system.css`: Global design tokens (colors, fonts, spacing)
   - `slide-layout.css`: Reusable slide layouts
   - Feature-specific CSS: Overrides for specific components

### Adding a New Slide

1. **Add HTML section** in `index.html`:
```html
<section class="slide-section slideN" id="slideN">
    <div class="slide-container">
        <h2 class="slide-title">Your Title</h2>
        <div class="slide-body">
            <p>Your content</p>
        </div>
        <div id="yourViz" class="viz-placeholder"></div>
    </div>
</section>
```

2. **Add navigation dot** in `index.html`:
```html
<ul class="navigation_dots">
    <!-- Existing dots -->
    <li aria-label="Slide N: Your Title"></li>
</ul>
```

3. **Create CSS file** `css/your-feature.css`:
```css
#yourViz {
    /* Your styles */
}
```

4. **Create JS file** `js/your-feature.js`:
```javascript
function initYourViz(data) {
    // Your D3 visualization code
}
```

5. **Link in `index.html`** (before `</head>`):
```html
<link rel="stylesheet" href="css/your-feature.css">
```

6. **Link in `index.html`** (before `main.js` script tag):
```html
<script src="js/your-feature.js"></script>
```

7. **Initialize in `main.js`**:
```javascript
Promise.all([...]).then(results => {
    // Existing initializations
    initYourViz(yourData);
});
```



### Browser Compatibility

**Recommended browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+


## 💡 Development Tips

- **Always use a local server** - Required for loading CSV files
- **Check browser console** - F12 → Console shows errors and warnings
- **Load order matters** - `main.js` must load last
- **Keep data files in root** - CSV files should be in the project root
- **Use modular files** - One feature per CSS/JS file pair
- **Test across browsers** - Chrome, Firefox, Safari have different behaviors
- **Optimize for performance** - Limit DOM manipulations, use CSS transforms


## 📝 License

This project is for educational purposes as part of Harvard CS171.

## 🙏 Acknowledgments

- **Data Sources**: YouTube Data API v3, Pew Research Center, WORLD POPULATION REVIEW
- **Built With**: D3.js v7, TopoJSON, Plotly
- **Fonts**: Google Fonts (Inter, Newsreader)
- **Course**: Harvard CS171 - Visualization (Fall 2025)



