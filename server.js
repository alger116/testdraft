const express = require('express');
const path = require('path');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./path/to/serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/load-history', async (req, res) => {
    try {
        const historyCollection = db.collection('history');
        const snapshot = await historyCollection.get();
        const history = snapshot.docs.map(doc => doc.data());
        res.json(history);
    } catch (error) {
        console.error('Failed to load history from Firestore', error);
        res.status(500).send('Failed to load history');
    }
});

app.post('/save-history', async (req, res) => {
    try {
        const historyCollection = db.collection('history');
        await historyCollection.add(req.body);
        res.send('History saved successfully');
    } catch (error) {
        console.error('Failed to save history to Firestore', error);
        res.status(500).send('Failed to save history');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});