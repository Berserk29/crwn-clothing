import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import './category.style.jsx';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import {
    CategoryTitleCss,
    CategoryContainerCss,
} from './category.style.jsx'

import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categories.selector.js';

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const {category} = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitleCss>{category}</CategoryTitleCss>
            { isLoading ? <Spinner/> :
            <CategoryContainerCss>
                {
                    products && products.map(product =>
                    <ProductCard product={product} key={product.id}/> )
                }
            </CategoryContainerCss>
            }
        </Fragment>
    )
}

export default Category;