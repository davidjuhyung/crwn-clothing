import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';
import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collection-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
});
export default connect(mapStateToProps)(CollectionOverview);
