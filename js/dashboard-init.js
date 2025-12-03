(function() {
    'use strict';

    function initializeDashboards() {
        console.log('Initializing dashboards...');
        
        if (typeof MediaDashboardSlide === 'undefined') {
            console.error('MediaDashboardSlide not loaded');
            return;
        }

        // Initialize Overview Dashboard (FIRST - with main header)
        const overviewRoot = document.getElementById('dashboard-overview-root');
        const overviewIntro = document.getElementById('dashboardOverviewIntro');
        if (overviewRoot) {
            const root1 = ReactDOM.createRoot(overviewRoot);
            const props1 = { 
                initialViewMode: 'overview', 
                hideControls: true,
                showMainHeader: true // Show "Interactive Media Analytics" header
            };
            root1.render(React.createElement(MediaDashboardSlide.default || MediaDashboardSlide, props1));
            
            // Show intro, then fade to dashboard
            setTimeout(() => {
                overviewIntro.classList.add('fade-out');
                setTimeout(() => {
                    overviewIntro.style.display = 'none';
                }, 1000);
            }, 3000);
        }

        // Initialize Drill-down Dashboard (SECOND - no main header, just view label)
        const drilldownRoot = document.getElementById('dashboard-drilldown-root');
        if (drilldownRoot) {
            const root2 = ReactDOM.createRoot(drilldownRoot);
            const props2 = { 
                initialViewMode: 'channel-drilldown', 
                hideControls: true,
                showMainHeader: false // Hide main header, show view label only
            };
            root2.render(React.createElement(MediaDashboardSlide.default || MediaDashboardSlide, props2));
        }

        // Initialize Short vs Long Dashboard (THIRD - no main header, just view label)
        const shortvlongRoot = document.getElementById('dashboard-shortvlong-root');
        if (shortvlongRoot) {
            const root3 = ReactDOM.createRoot(shortvlongRoot);
            const props3 = { 
                initialViewMode: 'short-vs-long', 
                hideControls: true,
                showMainHeader: false // Hide main header, show view label only
            };
            root3.render(React.createElement(MediaDashboardSlide.default || MediaDashboardSlide, props3));
        }

        console.log('All dashboards initialized');
    }

    document.addEventListener('DOMContentLoaded', initializeDashboards);
})();

