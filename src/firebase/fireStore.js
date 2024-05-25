import {
    collection,
    getDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

export const querybycollection = async (col) => {

    console.log("🚀 ~ querybycollection ~ db:", db)
    const collectionRef = collection(db, col)
    console.log("🚀 ~ querybycollection ~ colRef:", colRef)
    const snapshot = await getDoc(collectionRef)
    console.log("🚀 ~ querybycollection ~ snapshot:", snapshot)
    const docs = Array.from(snapshot.docs)
    console.log("🚀 ~ querybycollection ~ docs:", docs)

    return snapshot.data()
}