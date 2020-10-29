export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, {...itemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, itemToDecrement) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToDecrement.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToDecrement.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToDecrement.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
};
