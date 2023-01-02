import { Fragment } from 'react';
import { useSelector } from 'react-redux'
import { selectCategory, selectCategoryLoading } from '../../store/category/category.selector'


import CategoryPreview from '../../components/categories-preview/categories-preview';
import Spinner from '../../components/spinner/spinner';

const CategoriesPreview = () => {
  const category = useSelector(selectCategory);
  const isLoading = useSelector(selectCategoryLoading);


  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        category.map((res, index) => {
          return (
            <CategoryPreview key={index} title={res.title} products={res.products}/>
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
