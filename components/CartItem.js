import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";
import RemoveFromCartButton from './RemoveFromCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => (
  <CartItemStyles>
    <img width="50" src={cartItem.item.image} />
    <div className="cart-item-details">
      <h3>{cartItem.item.title}</h3>
      <p>
        {formatMoney(cartItem.item.price * cartItem.quantity)}
        {" - "}
        <em>
          {cartItem.quantity} &times; {formatMoney(cartItem.item.price)} each
        </em>
      </p>
    </div>
    <RemoveFromCartButton id={cartItem.id} />
  </CartItemStyles>
);

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;
