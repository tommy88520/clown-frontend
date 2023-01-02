import CustomButton from '../customButton/customButton'
import { useDispatch } from 'react-redux'
import { addCart } from '../../features/cartSlice'
import './product-card.scss'
const ProductCard = ({ product }) => {
  const { brand, price, url } = product
  const dispatch = useDispatch()
  const addCartItem = (item) => {
    item.stopPropagation()
    dispatch(addCart(product))
  }
  return (
    <div className="product-container">
      <img src={url} alt={`${brand}`} />
      <div className="product-container__footer">
        <span>{brand}</span>
        <p>{price}</p>
      </div>
      <CustomButton text="加入" onClick={addCartItem}/>
    </div>
  )
}

export default ProductCard