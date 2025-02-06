// Example data
const data = [
    { label: 'HTML', value: 52.2, color: '#e44d26' },
    { label: 'CSS', value: 45.9, color: '#264de4' },
    { label: 'JavaScript', value: 1.7, color: '#f0db4f' },
    { label: 'Ruby', value: 0.2, color: '#701516' }
];

// Function to create data bars
function createDataBars(data) {
    const barsContainer = document.getElementById('bars');
    barsContainer.innerHTML = '';

    data.forEach(item => {
        const barContainer = document.createElement('div');
        barContainer.className = 'bar-container';

        const label = document.createElement('span');
        label.className = 'label';
        label.textContent = item.label;

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = item.value + '%';
        bar.style.backgroundColor = item.color;
        bar.textContent = `${item.value}%`;

        barContainer.appendChild(label);
        barContainer.appendChild(bar);
        barsContainer.appendChild(barContainer);
    });
}

// Initial render
createDataBars(data);

// Example of updating data bars dynamically
function updateDataBars(newData) {
    data.push(newData);
    createDataBars(data);
}

// Form submission handler
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const label = document.getElementById('label').value;
    const value = document.getElementById('value').value;
    const color = document.getElementById('color').value;
    updateDataBars({ label, value, color });
});
