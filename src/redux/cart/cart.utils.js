export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (items, itemToRemove) => {
	const existingItem = items.find(item => item.id === itemToRemove.id);

	if (existingItem.quantity === 1) {
		return clearItem(items, existingItem);
	}

	return items.map(item =>
		item.id === existingItem.id
			? { ...item, quantity: existingItem.quantity - 1 }
			: item
	);
};

export const clearItem = (items, itemToClear) => {
	return items.filter(item => item.id !== itemToClear.id);
};
