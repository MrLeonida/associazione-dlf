import db from "./firebaseConfig";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";

export async function fetchNewsListFromFirestore() {
    try {
        const newsRef = collection(db, "news");
        const newsQuery = query(newsRef, 
                                where("active", "==", true),
                                orderBy("timestampCreation", "desc"),
                                limit(10));

        const querySnapshot = await getDocs(newsQuery);
        const posts = querySnapshot.docs.map(doc => ({
            id: doc.id, 
            fieldData: doc.data()
        }));

        return posts;
    } catch (error) {
        console.error('Failed to fetch data from Firestore:', error);
        return null;
    }
}