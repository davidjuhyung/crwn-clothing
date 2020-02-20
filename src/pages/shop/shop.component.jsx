import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

class Shop extends Component {
	state = {
		collections: SHOP_DATA
	};
	render() {
		return (
			<div className="shop-page">
				<h1>Shop Page</h1>
				{this.state.collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview
						key={id}
						{...otherCollectionProps}
					></CollectionPreview>
				))}
			</div>
		);
	}
}

export default Shop;
