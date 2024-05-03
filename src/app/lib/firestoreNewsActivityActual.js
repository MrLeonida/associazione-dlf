import db from "./firebaseConfig";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";

export async function fetchNewsActivityActualFromFirestore() {
    try {
        const newsRef = collection(db, "news");
        const q = query(newsRef,
                        where("activity", "==", true),
                        where("active", "==", true),
                        orderBy("timestampPromoTo", "asc"),
                        limit(1));
    
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