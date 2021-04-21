import { categories } from '../data'

export function getAllCategories(){
    return {
        categories
    }
}

export function getAllCategoriesSlug(){
    return categories.map(category => {
        return {
            params: {
                slug: category.slug
            }
        }
    })
}

export function getCategoryBySlug(slug){
    let category
    categories.find(item => 
        (item.slug === slug) ? category = item : category = null
    )
    return category
}