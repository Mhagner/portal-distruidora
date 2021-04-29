import { categories } from '../data'

export function getAllCategoriesSlug() {
    const data = categories.map(category => {
        return {
            params: {
                slug: category.slug
            }
        }
    })

    return data
}

export function getCategoryBySlug(slug) {
    const data = categories.find(category =>
        (category.slug === slug) ? category : null
    )
    return data
}