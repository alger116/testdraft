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

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = item.value + '%';
        bar.style.backgroundColor = item.color;
        bar.textContent = `${item.label} (${item.value}%)`;

        barContainer.appendChild(bar);
        barsContainer.appendChild(barContainer);
    });
}

// Initial render
createDataBars(data);

// Example of updating data bars dynamically
// You can call this function with new data to update the bars
function updateDataBars(newData) {
    createDataBars(newData);
}
