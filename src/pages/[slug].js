import { getCategoryBySlug, getAllCategoriesSlug } from '../hooks/categories'
import { ProductList } from '../components/Products/ProductList'
import { Breadcrumb } from '../components/Breadcrumb'

export default function Categories({ category }) {
    const { categoryName, products } = category
    console.log(products)

    return (
        <>
            <Breadcrumb pageName={categoryName} />
            <div className="container pl-4 pr-4">
                <ProductList products={products} /> 
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllCategoriesSlug()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const category = getCategoryBySlug(params.slug)

    return {
        props: {
            category
        }
    }
}