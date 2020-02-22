import React from 'react';
import CollectionOverView from '../../components/collection-overview/collection-overview.component.jsx';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component.jsx';

const ShopPage = ({ match }) => {
	console.log(match);

	return (
		<div className="shop-page">
			<h1>Shop Page</h1>
			<Route exact path={`${match.path}`} component={CollectionOverView} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
