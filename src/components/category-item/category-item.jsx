import './category-item.scss'
import { useNavigate } from 'react-router-dom'
const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()
  const onNavigateHandler = () =>{ 
    navigate(route)
  }
  return (
    <div className="category-item" onClick={onNavigateHandler}>
    <div className="category-item__background-img" style={{
      backgroundImage: `url(${imageUrl})`,
    }}/>
      <div className="category-item__box">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  )
}

export default CategoryItem