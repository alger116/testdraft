document.addEventListener('DOMContentLoaded', (event) => {
    // Load hanked.html content into the #content div
    let cachedHankedHtml = null;

    const loadHankedContent = () => {
        if (cachedHankedHtml) {
            document.getElementById('content').innerHTML = cachedHankedHtml;
            addHankeplaanButtonListener();
        } else {
            fetch('src/partials/hanked.html')
                .then(response => response.text())
                .then(data => {
                    cachedHankedHtml = data;
                    document.getElementById('content').innerHTML = data;
                    addHankeplaanButtonListener();
                })
                .catch(error => console.error('Error loading hanked.html:', error));
        }
    };

    const addHankeplaanButtonListener = () => {
        const hankeplaanButton = document.getElementById('hankeplaan');
        if (hankeplaanButton) {
            hankeplaanButton.addEventListener('click', () => {
                // Define the functionality for the button click
                alert('Hankeplaan button clicked!');
                // You can replace the alert with the actual functionality you need
            });
        } else {
            console.error('Hankeplaan button not found');
        }
    };

    loadHankedContent();
});