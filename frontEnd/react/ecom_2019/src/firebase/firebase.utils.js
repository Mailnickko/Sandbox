import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCMm3npF3dkToLD2seBxTN-cZB6TWiAX2g",
  authDomain: "ecomreact-1672e.firebaseapp.com",
  databaseURL: "https://ecomreact-1672e.firebaseio.com",
  projectId: "ecomreact-1672e",
  storageBucket: "ecomreact-1672e.appspot.com",
  messagingSenderId: "71236994674",
  appId: "1:71236994674:web:9271eb56a23b9bbc1124eb",
  measurementId: "G-L01ELNZJX7",
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (userAuth) {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // if user ref doesn't exist, create it
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        userRef.set({
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // firebase reqs get sent one by one. this causes issues if we were to lose connectivity midway.
  // use batch to send all at once, so that what is uploaded becomes more predictable
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      title,
      items,
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()), //convert this to a url that browser can interpret
    };
  });

  return transformedCollections.reduce((memo, collection) => {
    memo[collection.title.toLowerCase()] = collection;
    return memo;
  }, {});
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
