let metricCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chartContainer');
    const colors = ['primary', 'success', 'danger', 'purple'];
    let metricCount = 0;

    const storedMetrics = generateRandomBars(chartContainer);
    generateRandomBars(chartContainer);

    // Event Listeners
    document.getElementById('randomizeBtn').addEventListener('click', randomizeAll);
    document.getElementById('addBarBtn').addEventListener('click', addNewBar);
    
    document.querySelectorAll('.theme-dot').forEach(theme => {
        theme.addEventListener('click', setTheme);
    });
    function generateRandomBars(chartContainer) {
        const metrics = ['Sales Performance', 'User Growth', 'Revenue', 'Customer Satisfaction'];
        const generatedMetrics = metrics.map((metric, i) => ({
            name: metric,
            percentage: Math.floor(Math.random() * 80 + 20),
            color: colors[i % colors.length]
        }));
        
        generatedMetrics.forEach(config => {
            createBar(chartContainer, config);
        });

    function createBar(chartContainer, config) {
        const template = getBarTemplate();
        const barWrapper = setupBarWrapper(template);
        const bar = setupBar(template, config);
        
        metricCount++;
        barWrapper.id = `metric-${metricCount}`;
        template.querySelector('.metric-name').textContent = config.name;
        
        chartContainer.appendChild(template);
    }

    function getBarTemplate() {
        return document.getElementById('barTemplate').content.cloneNode(true);
    }

    function setupBarWrapper(template) {
        return template.querySelector('.bar-wrapper');
    }

    function setupBar(template, config) {
        const bar = template.querySelector('.bar');
        bar.classList.add(config.color);
        const fragment = document.createDocumentFragment();
        document.querySelectorAll('.bar').forEach(bar => {
            const newValue = Math.floor(Math.random() * 80 + 20);
            animateValue(bar, parseInt(bar.dataset.percentage), newValue);
            bar.dataset.percentage = newValue;
            bar.setAttribute('aria-valuenow', newValue);
            fragment.appendChild(bar.cloneNode(true));
        });
        document.getElementById('chartContainer').innerHTML = '';
        document.getElementById('chartContainer').appendChild(fragment);
        
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

        function update() {
            if (!document.body.contains(element)) {
                return;
            }
            const progress = Math.min((Date.now() - startTime) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.style.width = `${current}%`;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
        createBar(chartContainer, {
            name: `New Metric ${metricCount + 1}`,
            percentage: Math.floor(Math.random() * 80 + 20),
            color: colors[metricCount % colors.length]
        });
    }

    function setTheme(e) {
        document.body.classList.forEach(cls => {
            if (cls.startsWith('theme-')) {
                document.body.classList.remove(cls);
            }
        });
        const theme = e.target.dataset.theme;
        document.body.classList.add(`theme-${theme}`);
        document.body.className = theme;
    }
});
