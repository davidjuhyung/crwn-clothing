import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
const CartIcon = ({ toggleCartHidden, cartItemsCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartItemsCount}</span>
		</div>
	);
};
const mapDispatchToProps = disptach => ({
	toggleCartHidden: () => disptach(toggleCartHidden())
});

const mapStateToProps = state => {
	// note we are using the specific slice of state through
	// selectCartItemsCount(state), which prevents the unnecessary rendering
	return { cartItemsCount: selectCartItemsCount(state) };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
