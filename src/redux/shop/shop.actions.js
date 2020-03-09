import ShopActionTypes from './shop.types';
import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());
		// promise-oriented manner
		// .get() makes an api call to fetch the data related to collectionRef
		collectionRef
			.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
				// updateCollections(collectionsMap);
				// this.setState({ loading: false });
			})
			.catch(err => dispatch(fetchCollectionsFailure(err.message)));
	};
};
