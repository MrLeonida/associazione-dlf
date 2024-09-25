import db from "./firebaseConfig";
import { collection, query, where, orderBy, getDocs, Timestamp } from "firebase/firestore";

export async function fetchNewsWarningFromFirestore() {
    try {
        const newsRef = collection(db, "news");
        const now = Timestamp.now();

        const promoQuery = query(newsRef,
                                 where("category", "==", "Promo"),
                                 where("active", "==", true),
                                 where("timestamPromoFrom", "<=", now),
                                 where("timestampPromoTo", ">=", now),
                                 orderBy("timestampCreation", "desc"));

        const activityQuery = query(newsRef,
                                    where("category", "==", "Attività"),
                                    where("active", "==", true),
                                    where("timestamPromoFrom", "<=", now),
                                    where("timestampPromoTo", ">=", now),
                                    orderBy("timestampCreation", "desc"));

        const [promoSnapshot, activitySnapshot] = await Promise.all([
            getDocs(promoQuery),
            getDocs(activityQuery)
        ]);

        const promoPosts = promoSnapshot.docs.map(doc => ({
            id: doc.id,
            fieldData: doc.data()
        }));

        const activityPosts = activitySnapshot.docs.map(doc => ({
            id: doc.id,
            fieldData: doc.data()
        }));

        const posts = [...promoPosts, ...activityPosts];

        return posts;
    } catch (error) {
        console.error('Failed to fetch data from Firestore:', error);
        return null;
    }
}