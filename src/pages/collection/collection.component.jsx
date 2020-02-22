import React from 'react';

import './collection.style.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection }) => {
	console.log(collection);

	return <div className="collection-page">Collection Page</div>;
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
