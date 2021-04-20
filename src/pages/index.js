import { Benefits } from "../components/Home/Benefits";
import { Slider } from "../components/Home/Slider";
import { Shelf } from "../components/Home/Shelf";
import { carousel, benefits, banners, interruptores, logos } from '../data'
import { responsiveFiveColumns } from '../config'
import { Infocard } from "../components/Home/Infocard";
import { SingleBanner } from "../components/Home/SingleBanner";
import { ShelfLogos } from "../components/Home/SelfLogos";

export default function Home() {
  return (
    <>
      <Slider items={carousel} timeInterval="0" />
      <Benefits benefits={benefits} />
      <Shelf
        responsive={responsiveFiveColumns}
        shelfTitle="Promoções"
        shelfTitleSpan="do dia"
        shelfClass="shelf-products-home"
        dotListClass="dot-shelf-home"
        itemClass="item-class-home"
        sliderClass="slider-home"
        collection={interruptores}
      />
      <Infocard
        title="Variadades em leds"
        description="Não perca esses descontos especiais da semana"
        textPrice="A partir de "
        price="99,90"
        textButton="Veja agora!"
        backgroundImage="img/time-bg.jpg"
      />
      <Shelf
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
      />
      <SingleBanner
        banners={banners}
      />
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