import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { Benefits } from "../components/Home/Benefits";
import { Slider } from "../components/Home/Slider";
/* import { benefits, carousel } from '../data' */
import { ProcessTopBar } from "../components/ProcessTopBar"
import { ContentCategory } from "../components/Home/ContentCategory";
import { BannerPromo } from "../components/Home/BannerPromo";
import { instance } from '../config';

function Home({ carousels, categories, benefits, banners }) {

    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, []);

    return ( <
        >
        <
        NextSeo title = "Home"
        description = "A Portal Distribuidora iniciou suas atividades em 2007 com o intuito de atender as demandas da construção civil de materiais elétricos e iluminação na região de Goiânia - GO." /
        >
        <
        ProcessTopBar / >
        <
        Slider items = { carousels }
        timeInterval = "5000" / >
        <
        Benefits benefits = { benefits }
        /> <
        ContentCategory categories = { categories }
        /> <
        BannerPromo banners = { banners }
        /> <
        />
    )
}

export async function getStaticProps() {
    const resCarousel = await instance.get('/carousels')
    const carousels = resCarousel.data

    const resCategory = await instance.get('/categories?_sort=slug:asc')
    const categories = resCategory.data

    const resBenefit = await instance.get('/benefits?_sort=id:asc')
    const benefits = resBenefit.data

    const resBanner = await instance.get('/banners')
    const banners = resBanner.data

    return {
        props: {
            carousels,
            categories,
            benefits,
            banners
        },
        revalidate: 2
    }
}

export default Home