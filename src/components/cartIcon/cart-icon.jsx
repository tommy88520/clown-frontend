import { useDispatch, useSelector } from 'react-redux';
import { cartOpen } from '../../features/cartOpenSlice'
import { selectCartOpen } from '../../store/cart/cart'
import { selectCartCount } from '../../store/cart/cart'

import ShopIcon from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
const CartIcon = () =>{
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectCartOpen)
  const cartQuantity = useSelector(selectCartCount)


  const toggleCartOpen = () =>{
    dispatch(cartOpen(!isCartOpen))
  }
  return (
    <div className="cart-icon__container" onClick={toggleCartOpen}>
      <img className="cart-icon__shopping-icon" src={ShopIcon} alt="cart-icon"/>
      <span>{cartQuantity}</span>
    </div>
  )
}

export default CartIcon