// Firebase Firestore Migration Script
import { db } from "./firebase-config.js";
import { collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Load history.json (replace with actual JSON data)
const historyData = [
    {
        "name": "1",
        "cost": 1,
        "procedureType": "Avatud hankemenetlus ehitustööde hankelepingu sõlmimiseks",
        "contractSigningDate": "2025-01-31T00:00:00.000Z",
        "procedureDuration": 53,
        "procedureDetails": [
            { "step": "Riigihanke alusdokumentide koostamine", "days": "kuni 10 tööpäeva" },
            { "step": "Pakkumuste esitamine RHRis", "days": "15 päeva" }
        ],
        "requestSubmissionDate": "2024-12-09"
    }
];

// Assume current user ID (Replace with actual authentication logic)
const userId = "exampleUserId";

async function migrateHistory() {
    for (const entry of historyData) {
        const entryId = entry.name + "_" + entry.contractSigningDate; // Unique ID format
        await setDoc(doc(db, `history/${userId}/${entryId}`), entry);
        console.log(`✅ Migrated: ${entryId}`);
    }
}

migrateHistory();
