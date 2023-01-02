import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card';
import { getProductsDetails } from '../../features/productsDetailsSlice'
import { selectProductsDetail, selectProductsLoading } from '../../store/productsDetail/productsDetails'
import Spinner from '../../components/spinner/spinner'
import './category.scss'
const Category = () => {
  const { category } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsDetails(category))
    // eslint-disable-next-line
  }, [])
  const { products } = useSelector(selectProductsDetail)
  const productsLoading = useSelector(selectProductsLoading)

  return (
    <Fragment>
      <h2>{category.toUpperCase()}</h2>
      {productsLoading ? (<Spinner />) : (
        <div className="category-container">
          {products &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>)
      }

    </Fragment>
  )
}

export default Category