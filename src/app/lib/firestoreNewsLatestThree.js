import db from "./firebaseConfig";
import { collection, query, where, orderBy, limit, getDocs, Timestamp } from "firebase/firestore";

export async function fetchNewsLatestThreeFromFirestore() {
    try {
        const newsRef = collection(db, "news");
        const now = Timestamp.now();
        const q = query(newsRef, where("active", "==", true), where("timestampCreation", "<=", now), orderBy("timestampCreation", "desc"), limit(6));
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map(doc => ({
            id: doc.id, 
            fieldData: doc.data()
        }));
        return posts;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
}