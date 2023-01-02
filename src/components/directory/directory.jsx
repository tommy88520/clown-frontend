import React from 'react'
import CategoryItem from '../category-item/category-item'
import './directory.scss'
import { ClothCategoryProps } from '../../routes/home/home'
const Directory = ({ demoData } ) =>{
  return (
    <div className="categories-container">
        {demoData && demoData.map((category,index)=>{
          return(
            <CategoryItem key={index} category={category}/>
          )
        })}
    </div>
  )
}
export default Directory