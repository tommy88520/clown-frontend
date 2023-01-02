import React from "react";
import "./cart-item.scss"

const CartItem = ({ cartItem }) => {
  const { brand, url, price, quantity } = cartItem;
  return (
    <div className="cart-item__container">
      <img src={url} alt={`${brand}`} />
      <div className="cart-item__details">
        <span>{brand}</span>
      </div>
      <span>
        {quantity} x {price}
      </span>
    </div>
  )
};

export default CartItem;

