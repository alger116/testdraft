const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = 3000;
const uri = 'mongodb+srv://viljarpartel:tY8Pi%25k@mTuhRjQ@cluster0.ocvot.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectToDatabase() {
    try {
        await client.connect();
        db = client.db('yourDatabaseName'); // Replace with your database name
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

connectToDatabase();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/load-history', async (req, res) => {
    try {
        const historyCollection = db.collection('history');
        const history = await historyCollection.find({}).toArray();
        res.json(history);
    } catch (err) {
        console.error('Failed to load history', err);
        res.status(500).send('Failed to load history');
    }
});

app.post('/save-history', async (req, res) => {
    try {
        const historyCollection = db.collection('history');
        await historyCollection.insertMany(req.body);
        res.send('History saved successfully');
    } catch (err) {
        console.error('Failed to save history', err);
        res.status(500).send('Failed to save history');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});