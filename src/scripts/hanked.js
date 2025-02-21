document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const hankeplaanButton = document.getElementById('hankeplaan');
    if (hankeplaanButton) {
        console.log('Hankeplaan button found');
        hankeplaanButton.addEventListener('click', () => {
            console.log('Hankeplaan button clicked');
            alert('Hankeplaan button clicked!');
            // Comment out the generateExcelFile function for now to simplify
            // generateExcelFile();
        });
    } else {
        console.error('Hankeplaan button not found');
    }
});
