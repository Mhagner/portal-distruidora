import { useQuery } from "@apollo/client";
import { GET_GATEGORIES_SLUG } from '../../graphql/queries/categories'
import Link from 'next/link'

export function MainCategories() {
    const { data, loading, error } = useQuery(GET_GATEGORIES_SLUG, {
        variables: {
            limit: 5
        }
    })

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }

    const mainCategories = data.categories

    return (
        <nav className="nav-menu mobile-menu">
            <ul>
                {mainCategories.map((category) => (
                    <li key={category.id}>
                        <Link href={category.slug}>
                            <a>{category.categoryName}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}