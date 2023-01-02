import { useSelector } from 'react-redux'
import { selectCart, selectCartTotal } from '../../store/cart/cart'
import CheckoutItem from '../../components/checkout-item/checkout-item';
import './checkout.scss'


const Checkout = () => {
  const header = ['Product', 'Description', 'Quantity', 'Price', 'Remove']
  const cartItems = useSelector(selectCart)
  const cartTotal = useSelector(selectCartTotal)
  
  return (
    <div className="checkout-container">
      <div className="checkout-container__header">
        {header.map((item, index) => {
          return (
            <div className="checkout-container__header-block" key={index}>
              <span>{item}</span>
            </div>
          )
        })}
      </div>
      {cartItems.map((cartItem, index) => (
        <CheckoutItem key={index} cartItem={cartItem} />
      ))}
      <span className="checkout-container__total">Total: ${cartTotal}</span>
    </div>
  )

}

export default Checkout