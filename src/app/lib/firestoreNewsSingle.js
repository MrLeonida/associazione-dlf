import db from "./firebaseConfig";
import { collection, query, where, limit, getDocs } from "firebase/firestore";

export async function fetchNewsSingleFromFirestore(slug) {
    try {
        const newsRef = collection(db, "news");
        const newsQuery = query(newsRef, where("slug", "==", slug), where("active", "==", true), limit(1));
        const querySnapshot = await getDocs(newsQuery);
        if (querySnapshot.empty) {
            console.log('No matching documents.');
            return null;
        }
        const doc = querySnapshot.docs[0];
        return {
            id: doc.id, 
            fieldData: doc.data()
        };
    } catch (error) {
        console.error('Failed to fetch data from Firestore:', error);
        return null;
    }
}