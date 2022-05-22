import firestore from "../config/firestore";

const cleanDocument = (doc) => ({ id: doc.id, ...doc.data() });

export const getAllStickurs = async () => {
    const raw = await firestore.collection("stickurs").get();

    return raw.docs.map(cleanDocument);
};

export const findById = async (id) => {
    const documentSnapshot = await firestore
        .collection("stickurs")
        .doc(id)
        .get();

    if (!documentSnapshot.exists) {
        return null;
    }

    return cleanDocument(documentSnapshot);
};

export const createRecord = async (data) => {
    await firestore.collection("stickurs").add(data);
};
