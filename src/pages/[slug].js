import { getCategoryBySlug, getAllCategoriesSlug } from '../hooks/catefories'
import { ProductList } from '../components/Products/ProductList'
import { Breadcrumb } from '../components/Breadcrumb'
import client from '../apolo-client'
import { GET_GATEGORIES, GET_GATEGORIES_SLUG } from '../graphql/queries/categories'

const urlApi = 'http://localhost:1337'

export default function Categories({ category }) {
    const { categoryName, products } = category

    return (
        <>
            <Breadcrumb pageName={categoryName} />
            <div className="container pl-4 pr-4">
                <ProductList urlApi={urlApi} products={products} />
            </div>
        </>
    )
}


export async function getStaticPaths() {
    try {
        const { data } = await client.query({
            query: GET_GATEGORIES_SLUG
        })

        const categories = data.categories

        let paths
        if (categories) {
            paths = getAllCategoriesSlug(categories)
        } else {
            const msg = "Não foi possível listar as categorias"
            paths = JSON.stringify(msg)
        }

        return {
            paths,
            fallback: false
        }
    } catch (error) {
        const msg = JSON.stringify(error)
        return { props: { msg } }
    }
}

export async function getStaticProps({ params }) {
    try {
        const { data } = await client.query({
            query: GET_GATEGORIES
        })

        const categories = data.categories

        let category
        if (categories) {
            category = getCategoryBySlug(params.slug, categories)
        } else {
            const msg = "Não existem produtos cadastrados para essa categoria"
            category = JSON.stringify(msg)
        }

        return {
            props: {
                category
            }
        }
    } catch (error) {
        const msg = JSON.stringify(error)
        return { props: { msg } }
    }
}