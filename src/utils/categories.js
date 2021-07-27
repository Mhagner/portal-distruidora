
export function getAllCategoriesSlug(categories) {
    return categories.map(category => {
        return {
            params: {
                slug: category.slug
            }
        }
    })
}

export function getCategoryBySlug(categories, slug) {
    return categories.find(category =>
        (category.slug === slug) ? category : null
    )
}