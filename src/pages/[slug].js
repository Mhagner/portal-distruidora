import { getCategoryBySlug, getAllCategoriesSlug } from '../hooks/catefories'
/* import { ProductList } from '../components/Products/ProductList' */
import { Breadcrumb } from '../components/Breadcrumb'
import { ProcessTopBar } from "../components/ProcessTopBar"

export default function Categories({ category }) {
    const { categoryName } = category

    return (
        <>
            <ProcessTopBar />
            <Breadcrumb pageName={categoryName} />
           {/*  <div className="container pl-4 pr-4">
                <ProductList products={products} />
            </div> */}
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
        },
        revalidate: 5
    }
}