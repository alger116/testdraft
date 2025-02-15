document.addEventListener('DOMContentLoaded', (event) => {
    // Load hanked.html content into the #content div
    let cachedHankedHtml = null;

    const loadHankedContent = () => {
        if (cachedHankedHtml) {
            document.getElementById('content').innerHTML = cachedHankedHtml;
            addHankeplaanButtonListener();
        } else {
            fetch('src/partials/hanked.html')
                .then(response => {
                    if (!response.ok) throw new Error('Failed to load content');
                    return response.text();
                })
                .then(data => {
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
                generateExcelFile();
            });
        } else {
            console.error('Hankeplaan button not found');
        }
    };

    const generateExcelFile = () => {
        const tableBody = document.getElementById('savedSearchesTableBody');
        if (!tableBody) {
            alert("No saved searches to export.");
            return;
        }

        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Nimi,Maksumus,Menetluse Tüüp,Lepingu Allkirjastamise Kuupäev,Menetlusele kuluv aeg\n";

        const rows = tableBody.querySelectorAll('tr');
        rows.forEach(row => {
            const columns = row.querySelectorAll('td');
            const rowData = Array.from(columns).map(column => column.innerText).join(",");
            csvContent += rowData + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "hankeplaan.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    loadHankedContent();
});