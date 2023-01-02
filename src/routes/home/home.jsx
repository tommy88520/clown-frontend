// import { Component } from 'react'
// import axios from 'axios'
// eslint-disable-next-line
import { useQuery, gql } from '@apollo/client';
import React, { Fragment, useEffect } from 'react';
import Directory from '../../components/directory/directory';
import { useSelector, useDispatch } from 'react-redux'
import { getCategory } from '../../features/categorySlice'
import { selectCategory } from '../../store/category/category.selector'
import { selectCategoryLoading } from '../../store/category/category.selector'
import Spinner from '../../components/spinner/spinner'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getCategory)
  },[])
  const demoData = useSelector(selectCategory)
  const categoryLoading = useSelector(selectCategoryLoading)
  return (
    <Fragment>
      {
        categoryLoading ? (<Spinner />) : (<Directory demoData={demoData} />)
      }
      {/* 'text' */}
    </Fragment>

  )

}

export default Home;
