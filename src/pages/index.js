import { Banner } from "../components/Banner";
import { BannerSlide } from "../components/Home/BannerSlide";
import { Benefits } from "../components/Home/Benefits";
import { Slider } from "../components/Home/Slider";
import { Shelf } from "../components/Shelf";
import { carousel, benefits } from '../data'
import { responsiveThreeColumns, responsiveFourColumns, responsiveFiveColumns } from '../config'
import { Infocard } from "../components/Home/Infocard";
import { SingleBanner } from "../components/Home/SingleBanner";

export default function Home() {
  return (
    <>
      <Slider items={carousel} timeInterval="5000" />
      <Benefits benefits={benefits} />
      <Shelf
        responsive={responsiveFiveColumns}
        shelfTitle="Promoções"
        shelfTitleSpan="do dia"
        shelfClass="shelf-products-home"
        dotListClass="dot-shelf-home"
        itemClass="item-class-home"
        sliderClass="slider-home"
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
      />
      <Shelf
        responsive={responsiveFiveColumns}
        shelfTitle="Mais"
        shelfTitleSpan="comprados"
        shelfClass="shelf-products-home"
        dotListClass="dot-shelf-home"
        itemClass="item-class-home"
        sliderClass="slider-home"
      />
      <SingleBanner />
    </>
  )
}

{/* <Banner
  image="img/products/women-large.jpg"
  title="Teste Banner"
  description="Teste description"
/>
 */}