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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
