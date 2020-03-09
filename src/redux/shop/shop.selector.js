import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectShopCollections],
	collections =>
		collections ? Object.keys(collections).map(key => collections[key]) : [] // an array of objects or an empty array
);
export const selectShopCollection = collectionUrlParam =>
	createSelector([selectShopCollections], (
		collections // collections are objects
	) => (collections ? collections[collectionUrlParam] : null));

export const selectIsFetching = createSelector(
	[selectShop],
	shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
	[selectShop],
	shop => !!shop.collections
);
