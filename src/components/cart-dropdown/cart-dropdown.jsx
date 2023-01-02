import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartItem from '../cart-item/cart-item'
import CustomButton from '../customButton/customButton'
import { selectCart } from '../../store/cart/cart'
import './cart-dropdown.scss'
const CartDropdown = () => {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCart)
  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout')
  }, [])

  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__cart-items">
        {cartItems.length ? (
          cartItems.map((item, index) => <CartItem key={index} cartItem={item} />)
        ) : (<span className="cart-dropdown__empty-mes">Your cart is empty</span>)
        }
      </div>
      <CustomButton onClick={goToCheckoutHandler} text="GO TO CHECKOUT"/>
    </div>
  )
}

export default CartDropdown