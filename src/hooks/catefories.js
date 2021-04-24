/* import { categories } from '../data' */

/* import useCategories from '../hooks/useCategories'
const { categories } = useCategories() */

export function getAllCategoriesSlug(categories) {
    const data = categories.map(category => {
        return {
            params: {
                slug: category.slug
            }
        }
    })

    return data
}

export function getCategoryBySlug(slug, categories) {
    const data = categories.find(category =>
        (category.slug === slug) ? category : null
    )
    return data
}