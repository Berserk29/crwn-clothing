import { createContext, useState} from "react";
import PRODUCTS from '../shop-data.json'


export const ProductsContext = createContext({
    products: [],
    setProducts: () => []
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS); // data fetch for null
    const value = {products, setProducts};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
