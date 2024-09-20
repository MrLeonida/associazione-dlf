import db from "./firebaseConfig";
import { collection, query, where, orderBy, limit, getDocs, Timestamp } from "firebase/firestore";

export async function fetchNewsActivityWarningFromFirestore() {
    try {
        const newsRef = collection(db, "news");
        const now = Timestamp.now();
        const q = query(newsRef,
                        where("category", "==", "Attività"),
                        where("active", "==", true),
                        where("timestamPromoFrom", "<=", now),
                        where("timestampPromoTo", ">=", now),
                        orderBy("timestamPromoFrom", "asc"),
                        orderBy("timestampPromoTo", "asc"));
    
        const querySnapshot = await getDocs(q);
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