import { useState, useEffect } from 'react'
import Link from 'next/link'

export function MenuAllCategories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const res = localStorage.getItem('categories')
        setCategories(JSON.parse(res))
    }, []);

    const list = categories || []
    return (
        <div className="nav-depart">
            <div className="depart-btn">
                <i className="ti-menu" />
                <span>Nossas categorias</span>
                <ul className="depart-hover">
                    {list.map((category) => (
                        <li key={category.id}>
                            <Link href={category.slug}>
                                <a>{category.categoryName}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


