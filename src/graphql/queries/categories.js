import { gql } from '@apollo/client'

export const GET_GATEGORIES = 
gql`query Categories {
    categories {
        id
        slug
        categoryName
        products {
            id
            productDescription
            marca
            image {
                url
            }
        }
    }
}`

export const GET_GATEGORIES_SLUG = 
gql`query CategoriesSlug($limit: Int) {
    categories(limit: $limit) {
      id
      slug
      categoryName
    }
  }`
