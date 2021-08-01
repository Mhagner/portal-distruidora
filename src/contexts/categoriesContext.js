import { createContext, useEffect, useState } from "react"
import { instance } from "../config";


export const CategoriesContext = createContext({})

export function CategoriesProvider({ children }) {
    const [teste, setTeste] = useState([])

    async function getCategories(){
        const res = await instance.get('/categories')
        setTeste(res.data)
    }

    useEffect(() => {
        getCategories()
    }, [categories]);

    return (
        <CategoriesContext.Provider
            value={{
                teste
            }}
        >
        {children}
        </CategoriesContext.Provider>
    )
}