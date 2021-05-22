import { getCategoryBySlug, getAllCategoriesSlug } from '../hooks/catefories'
import { Breadcrumb } from '../components/Breadcrumb'
import { ProcessTopBar } from "../components/ProcessTopBar"
import { TitlePage } from '../components/TitlePage';
import { Infocard } from "../components/Home/Infocard";
import { ShelfLogos } from "../components/Home/SelfLogos";
import { shelfLogo } from '../config'
import { GalleryCategory } from '../components/GalleryCategory';

export default function Categories({ category }) {
    const { categoryName, brands, banner, photos } = category

    return (
        <>
            <ProcessTopBar />
            <Breadcrumb pageName={categoryName} />
            <div className="container">
                <TitlePage
                    descriptionSpan={categoryName}
                />
                <Infocard
                    backgroundImage={banner}
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