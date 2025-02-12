import { db } from "./firebase-config.js";
import { collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Replace with actual user ID from authentication
const userId = "exampleUserId";

// Load history.json data (Replace with actual JSON import)
const historyData = [
    {
        "name": "Project A",
        "cost": 20000,
        "procedureType": "Piiratud hankemenetlus",
        "contractSigningDate": "2025-02-15T00:00:00.000Z",
        "procedureDuration": 68,
        "procedureDetails": [
            { "step": "Riigihanke alusdokumentide koostamine", "days": "10 tööpäeva" },
            { "step": "Taotluste esitamine RHRis", "days": "15 päeva" },
            { "step": "Pakkumuste esitamine RHRis", "days": "15 päeva" },
            { "step": "Pakkumuste hindamine", "days": "5 päeva" },
            { "step": "Vastavaks ja edukaks tunnistamise otsus", "days": "3 päeva" },
            { "step": "Pakkujate hindamine", "days": "3 päeva" },
            { "step": "Eduka kõrvaldamata jätmine ja kval", "days": "3 päeva" },
            { "step": "Hankelepingu sõlmimise ooteaeg", "days": "14 päeva" }
        ],
        "requestSubmissionDate": "2024-12-01"
    }
];

async function migrateHistory() {
    for (const entry of historyData) {
        const entryId = `${entry.name}_${entry.contractSigningDate}`;
        await setDoc(doc(db, `history/${userId}/entries`, entryId), entry);
        console.log(`✅ Migrated: ${entryId}`);
    }
}

migrateHistory();
