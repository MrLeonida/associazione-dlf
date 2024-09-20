import db from "./firebaseConfig";
import { collection, query, where, orderBy, limit, getDocs, Timestamp } from "firebase/firestore";

export async function fetchNewsActivityListFromFirestore() {
    try {
        const newsRef = collection(db, "news");
        const now = Timestamp.now();
        const newsQuery = query(newsRef, 
                                where("category", "==", "Attività"),
                                where("active", "==", true),
                                where("timestamPromoFrom", "<=", now),
                                where("timestampPromoTo", ">=", now),
                                orderBy("timestamPromoFrom", "asc"),
                                orderBy("timestampPromoTo", "asc"),
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