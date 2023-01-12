import {
    CategoryPreviewContainerCss,
    TitleCss,
    PreviewCss
} from'./category-preview.style.jsx'

import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products}) => {

    return (
        <CategoryPreviewContainerCss>
            <h2>
                <TitleCss to={title}>{title.toUpperCase()}</TitleCss>
            </h2>
            <PreviewCss>
            {   
                products
                .filter((_, idx) => idx < 4)
                .map(product => <ProductCard product={product} key={product.id}/>)    
            }
            </PreviewCss>
        </CategoryPreviewContainerCss>
    )
}

export default CategoryPreview;