document.addEventListener('DOMContentLoaded', (event) => {
    // ...existing code...

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

    // ...existing code...
});
