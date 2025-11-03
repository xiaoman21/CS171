# 📂 Project Structure Summary

## ✅ Organized File Structure

```
page2/
├── 📄 index.html                       # Main entry point - START HERE!
├── 📄 README.md                        # Detailed documentation
├── 📄 PROJECT_STRUCTURE.md            # This file
├── 📄 tiktok-users-by-country-2025.csv # TikTok data
│
├── 📁 css/                            # All stylesheets organized here
│   ├── main.css                       # Core styles (layout, navigation, common)
│   ├── globe.css                      # Section 1: TikTok globe styles
│   └── youtube.css                    # Section 2: YouTube chart styles
│
├── 📁 js/                             # All JavaScript files organized here
│   ├── navigation.js                  # Navigation system (dots, scroll)
│   ├── tiktok-globe.js               # Section 1: TikTok globe visualization
│   ├── youtube-chart.js              # Section 2: YouTube chart visualization
│   └── main.js                        # Data loading & initialization
│
└── 📁 page3/                          # Data folder
    ├── top2024_annual_summary.csv     # YouTube data
    └── css/
        └── style.css                   # (Original page3 styles)
```

## 🎯 Key Files

### Main Entry
- **index.html** - Open this file to view the visualization

### CSS Files (3 files)
1. **css/main.css** - Core styling for the entire project
2. **css/globe.css** - Styles specific to TikTok globe (Section 1)
3. **css/youtube.css** - Styles specific to YouTube chart (Section 2)

### JavaScript Files (4 files)
1. **js/navigation.js** - Handles scroll navigation & dots
2. **js/tiktok-globe.js** - TikTok globe visualization logic
3. **js/youtube-chart.js** - YouTube chart visualization logic
4. **js/main.js** - Initializes everything & loads data

## 🔗 File Dependencies

```
index.html
    ├── CSS
    │   ├── css/main.css (required)
    │   ├── css/globe.css (for section 1)
    │   └── css/youtube.css (for section 2)
    │
    └── JavaScript (load order matters!)
        ├── D3.js libraries (CDN)
        ├── js/navigation.js
        ├── js/tiktok-globe.js
        ├── js/youtube-chart.js
        └── js/main.js (must be last)
```

## 📊 Data Files

- **tiktok-users-by-country-2025.csv** - TikTok user data by country (2023-2025)
- **page3/top2024_annual_summary.csv** - YouTube channel statistics

## 🎨 Design System

### Colors
- Background: `#393A4C` (dark blue-gray)
- Accent: `#fff4d6` (cream/beige)
- Primary: `#ff6b6b` (coral red)
- Secondary: `#4ecdc4` (turquoise)
- Container: `#2F2F4C` (slightly lighter blue-gray)

### Fonts
- Primary: `'Architects Daughter', cursive` (Google Fonts)

### Effects
- Hand-drawn border style (irregular border-radius)
- Smooth transitions
- Drop shadows

## 🚀 How to Use

### Development
```bash
# Start a local server
python -m http.server 8000

# Open in browser
http://localhost:8000
```

### Navigation
- Scroll to move between pages
- Click navigation dots (right side)
- Each section is full-screen

## 📝 Modification Guide

### Adding a New Section

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
- ✅ Easy to find specific code
- ✅ Easy to add new sections
- ✅ Easy to modify individual sections
- ✅ Clear dependencies
- ✅ Modular and maintainable

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

---

**Last Updated**: 2025-11-03
**Version**: 1.0
