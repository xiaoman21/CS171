(function() {
    'use strict';

    function initializeDashboards() {
        console.log('Initializing dashboards...');
        
        if (typeof MediaDashboardSlide === 'undefined') {
            console.error('MediaDashboardSlide not loaded');
            return;
        }

        // Initialize Overview Dashboard
        const overviewRoot = document.getElementById('dashboard-overview-root');
        const overviewIntro = document.getElementById('dashboardOverviewIntro');
        if (overviewRoot) {
            const root1 = ReactDOM.createRoot(overviewRoot);
            const props1 = { initialViewMode: 'overview', hideControls: true };
            root1.render(React.createElement(MediaDashboardSlide.default || MediaDashboardSlide, props1));
            
            // Show intro, then fade to dashboard
            setTimeout(() => {
                overviewIntro.classList.add('fade-out');
                setTimeout(() => {
                    overviewIntro.style.display = 'none';
                }, 1000);
            }, 3000);
        }

        // Initialize Drill-down Dashboard
        const drilldownRoot = document.getElementById('dashboard-drilldown-root');
        const drilldownIntro = document.getElementById('dashboardDrilldownIntro');
        if (drilldownRoot) {
            const root2 = ReactDOM.createRoot(drilldownRoot);
            const props2 = { initialViewMode: 'channel-drilldown', hideControls: true };
            root2.render(React.createElement(MediaDashboardSlide.default || MediaDashboardSlide, props2));
            
            setTimeout(() => {
                drilldownIntro.classList.add('fade-out');
                setTimeout(() => {
                    drilldownIntro.style.display = 'none';
                }, 1000);
            }, 3000);
        }

        // Initialize Short vs Long Dashboard
        const shortvlongRoot = document.getElementById('dashboard-shortvlong-root');
        const shortvlongIntro = document.getElementById('dashboardShortvlongIntro');
        if (shortvlongRoot) {
            const root3 = ReactDOM.createRoot(shortvlongRoot);
            const props3 = { initialViewMode: 'short-vs-long', hideControls: true };
            root3.render(React.createElement(MediaDashboardSlide.default || MediaDashboardSlide, props3));
            
            setTimeout(() => {
                shortvlongIntro.classList.add('fade-out');
                setTimeout(() => {
                    shortvlongIntro.style.display = 'none';
                }, 1000);
            }, 3000);
        }

        console.log('All dashboards initialized');
    }

    document.addEventListener('DOMContentLoaded', initializeDashboards);
})();

