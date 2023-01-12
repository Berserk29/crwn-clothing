import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import './category.style.jsx';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import {
    CategoryTitleCss,
    CategoryContainerCss,
} from './category.style.jsx'

const Category = () => {
    const {category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitleCss>{category}</CategoryTitleCss>
            <CategoryContainerCss>
                {products && products.map(product =>
                    <ProductCard product={product} key={product.id}/> )
                }
            </CategoryContainerCss>
        </Fragment>
    )
}

export default Category;