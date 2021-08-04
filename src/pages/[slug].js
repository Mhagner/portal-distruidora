import { useRouter } from 'next/router'
import { getCategoryBySlug, getAllCategoriesSlug } from '../utils/categories'
import { Breadcrumb } from '../components/Breadcrumb'
import { ProcessTopBar } from "../components/ProcessTopBar"
import { TitlePage } from '../components/TitlePage';
import { Infocard } from "../components/Home/Infocard";
import { ShelfLogos } from "../components/Home/SelfLogos";
import { instance, shelfLogo } from '../config'
import { GalleryCategory } from '../components/GalleryCategory';
import { NextSeo } from 'next-seo'

export default function Categories({ category }) {
    /* const { brands, banner, photos, categoryName } = category */
    const router = useRouter()

    if(router.isFallback) {
        return <h1>Aguarde ...</h1>
    }

    const [image] = category.banner

    return (
        <>
            <NextSeo
                title={category.categoryName}
                description={category.categoryName}
            />
            <ProcessTopBar />
            <Breadcrumb pageName={category.categoryName} />
            <div className="container">
                <TitlePage
                    descriptionSpan={category.categoryName}
                />
                <Infocard
                    backgroundImage={image.url}
                    large
                />
                <ShelfLogos
                    responsive={shelfLogo}
                    sliderClassLogo="slider-logo"
                    shelfClassLogo="shelf-logo-class"
                    dotListClassLogo="dot-shelf-logo"
                    itemClassLogo="item-class-logo"
                    collectionLogos={category.brands}
                />
                <GalleryCategory
                    photos={category.photos}
                />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const res = await instance.get('/categories?_sort=id:asc');
    const categories = res.data;
    const paths = getAllCategoriesSlug(categories)

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const res = await instance.get('/categories?_sort=id:asc');
    const categories = res.data;
    const category = getCategoryBySlug(categories, params.slug)

    return {
        props: {
            category
        },
        revalidate: 2
    }
}