import { categories } from '../data'

export function getAllCategoriesSlug() {
    return categories.map(category => {
        return {
            params: {
                slug: category.slug
            }
        }
    })
}

export function getCategoryBySlug(slug) {
    return categories.find(category =>
        (category.slug === slug) ? category : null
    )
}