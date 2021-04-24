import { useQuery } from "@apollo/client";
import { GET_GATEGORIES_SLUG } from '../../graphql/queries/categories'
import Link from 'next/link'

 export function MenuAllCategories() {
    const { data, loading, error } = useQuery(GET_GATEGORIES_SLUG)

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }

    const allCategories = data.categories

    return (
        <div className="nav-depart">
            <div className="depart-btn">
                <i className="ti-menu" />
                <span>Todas as categorias</span>
                <ul className="depart-hover">
                    {allCategories.map((category) => (
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