import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  NameOrPrice,
  QuantityContainer,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <NameOrPrice>{name}</NameOrPrice>
      <QuantityContainer>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantityContainer>
      <NameOrPrice>{price}</NameOrPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
