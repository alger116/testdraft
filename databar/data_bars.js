document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chartContainer');
    const colors = ['primary', 'success', 'danger', 'purple'];
    let metricCount = 0;

    // Initialize demo data
    generateRandomBars();

    // Event Listeners
    document.getElementById('randomizeBtn').addEventListener('click', randomizeAll);
    document.getElementById('addBarBtn').addEventListener('click', addNewBar);
    
    document.querySelectorAll('.theme-dot').forEach(theme => {
        theme.addEventListener('click', setTheme);
    });

    function generateRandomBars() {
        const metrics = ['Sales Performance', 'User Growth', 'Revenue', 'Customer Satisfaction'];
        metrics.forEach((metric, i) => {
            createBar({
                name: metric,
                percentage: Math.floor(Math.random() * 80 + 20),
                color: colors[i % colors.length]
            });
        });
    }

    function createBar(config) {
        const template = document.getElementById('barTemplate').content.cloneNode(true);
        const barWrapper = template.querySelector('.bar-wrapper');
        const bar = template.querySelector('.bar');
        
        metricCount++;
        barWrapper.id = `metric-${metricCount}`;
        template.querySelector('.metric-name').textContent = config.name;
        
        bar.classList.add(config.color);
        bar.style.setProperty('--bar-color', `var(--${config.color}-color)`);
        bar.dataset.percentage = config.percentage;
        bar.style.width = `${config.percentage}%`;
        
        bar.setAttribute('aria-valuenow', config.percentage);
        chartContainer.appendChild(template);
    }

    function randomizeAll() {
        document.querySelectorAll('.bar').forEach(bar => {
            const newValue = Math.floor(Math.random() * 80 + 20);
            animateValue(bar, parseInt(bar.dataset.percentage), newValue);
            bar.dataset.percentage = newValue;
            bar.setAttribute('aria-valuenow', newValue);
        });
    }

    function animateValue(element, start, end) {
        const duration = 1000;
        const startTime = Date.now();
        
        const update = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + (end - start) * progress);
            element.style.width = `${current}%`;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };
        
        requestAnimationFrame(update);
    }

    function addNewBar() {
        createBar({
            name: `New Metric ${metricCount + 1}`,
            percentage: Math.floor(Math.random() * 80 + 20),
            color: colors[metricCount % colors.length]
        });
    }

    function setTheme(e) {
        const theme = e.target.dataset.theme;
        document.body.className = theme;
    }
});
