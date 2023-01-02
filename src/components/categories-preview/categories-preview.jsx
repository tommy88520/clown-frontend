import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card'
import { useSelector, useDispatch } from 'react-redux'
import { getCategory } from '../../features/categorySlice'
import { selectCategory } from '../../store/category/category.selector'
import './categories-preview.scss'

const CategoriesPreview = ({ title, products }) => {

  return (
    <div className="category-preview__container">
      <h2>
        <Link to={title} className="category-preview__link">{title.toUpperCase()}</Link>
      </h2>
      <div className="category-preview__body">
        {products
          .filter((_, idx) => idx < 4)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  )
}

export default CategoriesPreview