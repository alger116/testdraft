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

        // Comment out the generateExcelFile function for now to simplify
const generateExcelFile = () => {
    console.log('Generating Excel file');
    const tableBody = document.getElementById('savedSearchesTableBody');
    if (!tableBody) {
        alert("No saved searches to export.");
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Riigihanke Eseme Nimetus, Riigihanke Menetluse Liik, Riigihanke Korraldamise Eeldatav Aeg, Riigihanke Eeldatav Maksumus (ilma KM-ta), Sõlmitava Lepingu Kehtivusaeg, Riigihanke Eest Vastutav Isik, Tehnilise Kirjelduse Eest Vastutav Isik\n";

    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const columns = row.querySelectorAll('td');
        
        if (columns.length < 5) return; // Kontrollime, et vajalikud veerud on olemas

        const nimi = columns[0].innerText.trim();
        const menetlusLiik = columns[1].innerText.trim();
        const maksumus = columns[2].innerText.trim();
        const taotluseKuupaev = columns[4].innerText.trim();

        const kvartal = getQuarter(taotluseKuupaev);

        const rowData = [nimi, menetlusLiik, kvartal, maksumus, "", "", ""].join(",");
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

const getQuarter = (dateString) => {
    if (!dateString) return ""; // Kui kuupäev puudub, tagastame tühja väärtuse
    
    const dateParts = dateString.split('.');
    if (dateParts.length !== 3) return ""; // Eeldame formaati "dd.mm.yyyy"
    
    const month = parseInt(dateParts[1], 10);
    const year = dateParts[2];
    
    let quarter = "";
    if (month >= 1 && month <= 3) quarter = "1. kvartal " + year;
    else if (month >= 4 && month <= 6) quarter = "2. kvartal " + year;
    else if (month >= 7 && month <= 9) quarter = "3. kvartal " + year;
    else if (month >= 10 && month <= 12) quarter = "4. kvartal " + year;
    
    return quarter;
};
