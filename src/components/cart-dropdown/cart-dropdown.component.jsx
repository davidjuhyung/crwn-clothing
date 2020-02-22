import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.style.scss';
import CartItem from '../cart-item/car-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{// 0, undefined, null, NaN, "", false becomes false in if conditiions
				// thus if length === 0, then the condition is false.
				cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<div className="empty-message">Your cart is empty</div>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
