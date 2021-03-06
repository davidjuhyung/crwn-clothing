import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCguGB2hLZKrXruYt1nCw9y_n-wmJhKQ7w',
	authDomain: 'crwn-db-5f5e1.firebaseapp.com',
	databaseURL: 'https://crwn-db-5f5e1.firebaseio.com',
	projectId: 'crwn-db-5f5e1',
	storageBucket: 'crwn-db-5f5e1.appspot.com',
	messagingSenderId: '638090744493',
	appId: '1:638090744493:web:07f80612bafd6434a42c24',
	measurementId: 'G-Y2LBFE96BJ'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const userSnapshot = await userRef.get();

	if (!userSnapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (err) {
			console.log('error creating user', err.message);
		}
	}
	return userRef;
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});

	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

export const addCollectionsAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	// create a new instance of collection with a name, collectionKey
	const collectionRef = firestore.collection(collectionKey);
	// console.log(collectionRef);

	// group all set requests using batch
	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		// create a new instance of document inside this collection, with a unique id
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
