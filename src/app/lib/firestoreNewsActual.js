import db from "./firebaseConfig";
import { collection, query, where, orderBy, limit, getDocs, Timestamp } from "firebase/firestore";

export async function fetchNewsActualFromFirestore() {
    try {
        const newsRef = collection(db, "news");
        const now = Timestamp.now();

        // Query per "Promo"
        const promoQuery = query(newsRef,
            where("category", "==", "Promo"),
            where("promo", "==", true),
            where("active", "==", true),
            where("timestamPromoFrom", "<=", now),
            where("timestampPromoTo", ">=", now),
            orderBy("timestamPromoFrom", "asc"),
            orderBy("timestampPromoTo", "asc"),
            limit(1)
        );

        // Esegui la query per "Promo"
        const promoSnapshot = await getDocs(promoQuery);

        // Se esistono risultati per "Promo", restituiscili
        if (!promoSnapshot.empty) {
            const promoPosts = promoSnapshot.docs.map(doc => ({
                id: doc.id,
                fieldData: doc.data()
            }));
            return promoPosts;
        }

        // Se non ci sono risultati per "Promo", esegui la query per "Evento"
        const eventQuery = query(newsRef,
            where("category", "==", "Evento"),
            where("active", "==", true),
            where("timestamPromoFrom", "<=", now),
            where("timestampPromoTo", ">=", now),
            orderBy("timestamPromoFrom", "asc"),
            orderBy("timestampPromoTo", "asc"),
            limit(1)
        );

        const eventSnapshot = await getDocs(eventQuery);

        // Se esistono risultati per "Evento", restituiscili
        if (!eventSnapshot.empty) {
            const eventPosts = eventSnapshot.docs.map(doc => ({
                id: doc.id,
                fieldData: doc.data()
            }));
            return eventPosts;
        }

        // Se non ci sono risultati per "Evento", esegui la query per "News"
        const newsQuery = query(newsRef,
            where("category", "==", "News"),
            where("active", "==", true),
            where("timestamPromoFrom", "<=", now),
            where("timestampPromoTo", ">=", now),
            orderBy("timestamPromoFrom", "asc"),
            orderBy("timestampPromoTo", "asc"),
            limit(1)
        );

        const newsSnapshot = await getDocs(newsQuery);

        // Se esistono risultati per "Evento", restituiscili
        if (!newsSnapshot.empty) {
            const newsPosts = newsSnapshot.docs.map(doc => ({
                id: doc.id,
                fieldData: doc.data()
            }));
            return newsPosts;
        }

        // Se non ci sono risultati in nessuna delle due categorie, restituisci un array vuoto
        return [];
    } catch (error) {
        console.error('Failed to fetch data from Firestore:', error);
        return null;
    }
}