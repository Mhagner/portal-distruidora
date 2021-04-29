import Link from 'next/link'
import { categories } from '../../data'

 export function MenuAllCategories() {

    return (
        <div className="nav-depart">
            <div className="depart-btn">
                <i className="ti-menu" />
                <span>Nossas categorias</span>
                <ul className="depart-hover">
                    {categories.map((category) => (
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