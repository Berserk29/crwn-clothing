import { createContext, useState, useEffect} from "react";

import { getCategoriesAndDocuments } from "../utiles/firebase/firebase.utiles.js";


export const CategoriesContext = createContext({
    categoriesMap: {},
    setProducts: () => {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({}); 

    // if you use async --> create an async function inside the useEffect!
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();

    }, [])

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
