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
    const { categoryName, brands, banner, photos } = category
    const [image] = banner

    return (
        <>
            <NextSeo
                title={categoryName}
                description={categoryName}
            />
            <ProcessTopBar />
            <Breadcrumb pageName={categoryName} />
            <div className="container">
                <TitlePage
                    descriptionSpan={categoryName}
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
                    collectionLogos={brands}
                />
                <GalleryCategory
                    photos={photos}
                />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const res = await instance.get('/categories');
    const categories = res.data;
    const paths = getAllCategoriesSlug(categories)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await instance.get('/categories');
    const categories = res.data;
    const category = getCategoryBySlug(categories, params.slug)

    return {
        props: {
            category
        },
        revalidate: 5
    }
}