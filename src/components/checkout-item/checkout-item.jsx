import { useSelector, useDispatch } from 'react-redux';
import { addCart, removeCart  } from '../../features/cartSlice'

import './checkout-item.scss'
const CheckoutItem = ({ cartItem }) => {
  const {brand, url , price, quantity } = cartItem
  const dispatch = useDispatch()
  const addCartItem = (item) => {
    item.stopPropagation()
    dispatch(addCart(cartItem))
  }
  const removeCartItem = (item) => {
    item.stopPropagation()
    dispatch(removeCart(cartItem))
  }
  return (
    <div className="checkout-item__container">
      <div className="checkout-item__image-container">
        <img src={url} alt="brand"/>
      </div>
      <span className="checkout-item__base-span">{brand}</span>
      <div className="checkout-item__quantity">
        <div className="checkout-item__arrow" onClick={removeCartItem}>&#10094;</div>
        <span className="checkout-item__value">{quantity}</span>
        <div className="checkout-item__arrow" onClick={addCartItem}>&#10095;</div>
      </div>
      <span className="checkout-item__base-span">{price}</span>
      <div className="checkout-item__remove-button" onClick={removeCartItem}>&#10005;</div>
    </div>
  ) 
}

export default CheckoutItem