const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://viljarpartel:tY8Pi%25k%40mTuhRjQ@cluster0.ocvot.mongodb.net/cluster0?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('Cluster0'); // Replace with your database name
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

module.exports = { connect };