import { Benefits } from "../components/Home/Benefits";
import { Slider } from "../components/Home/Slider";
import { Category } from "../components/Home/Category";
import { carousel, benefits, banners, interruptores, logos, categoryIcons } from '../data'
import { responsiveFiveColumns, responsiveFourColumns } from '../config'
import { SingleBanner } from "../components/Home/SingleBanner";
import { ShelfLogos } from "../components/Home/SelfLogos";
import { ProcessTopBar } from "../components/ProcessTopBar"
import { Shelf } from "../components/Home/Shelf";
import { ContentCategory } from "../components/Home/ContentCategory";

export default function Home() {
  return (
    <>
      <ProcessTopBar />
      <Slider items={carousel} timeInterval="3000" />
      <Benefits benefits={benefits} />
      {/* <Shelf
        responsive={responsiveFiveColumns}
        shelfTitle="Navegue por nossas"
        shelfTitleSpan="Categorias"
        shelfClass="shelf-products-home"
        dotListClass="dot-shelf-home"
        itemClass="item-class-home"
        sliderClass="slider-home"
        collection={categoryIcons}
      /> */}
      <ContentCategory />
    {/*   <SingleBanner
        banners={banners}
      /> */}
     {/*  <Shelf
        responsive={responsiveFiveColumns}
        shelfTitle="Variedade de"
        shelfTitleSpan="interruptores"
        shelfClass="shelf-products-home"
        dotListClass="dot-shelf-home"
        itemClass="item-class-home"
        sliderClass="slider-home"
        collection={interruptores}
      />
      <Shelf
        responsive={responsiveFiveColumns}
        shelfTitle="Mais"
        shelfTitleSpan="comprados"
        shelfClass="shelf-products-home"
        dotListClass="dot-shelf-home"
        itemClass="item-class-home"
        sliderClass="slider-home"
        collection={interruptores}
      /> */}

      <ShelfLogos
        responsive={responsiveFiveColumns}
        sliderClassLogo="slider-logo"
        shelfClassLogo="shelf-logo-class"
        dotListClassLogo="dot-shelf-logo"
        itemClassLogo="item-class-logo"
        collectionLogos={logos}
      />
    </>
  )
}