const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const historyFilePath = path.join(__dirname, 'history.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/load-history', (req, res) => {
    fs.readFile(historyFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Failed to read history file', err);
            return res.status(500).send('Failed to load history');
        }
        res.json(JSON.parse(data));
    });
});

app.post('/save-history', (req, res) => {
    const historyData = JSON.stringify(req.body, null, 2);
    fs.writeFile(historyFilePath, historyData, 'utf8', (err) => {
        if (err) {
            console.error('Failed to save history file', err);
            return res.status(500).send('Failed to save history');
        }
        res.send('History saved successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});