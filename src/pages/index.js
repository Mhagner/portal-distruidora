import { Benefits } from "../components/Home/Benefits";
import { Slider } from "../components/Home/Slider";
import { carousel, benefits, logos } from '../data'
import { responsiveFiveColumns } from '../config'
import { ShelfLogos } from "../components/Home/SelfLogos";
import { ProcessTopBar } from "../components/ProcessTopBar"
import { ContentCategory } from "../components/Home/ContentCategory";
import { Infocard } from "../components/Home/Infocard";


export default function Home() {
  return (
    <>
      <ProcessTopBar />
      <Slider items={carousel} timeInterval="5000" />
      <Benefits benefits={benefits} />
      <ContentCategory />
      <section className="content__category content__category--white">
        <div className="container">
          <div className="container-infocard">
            <Infocard
              backgroundImage="img/banner-home/ferramentas.png"
            />
            <Infocard
              backgroundImage="img/banner-home/interruptores.png"
            />
         {/*    <Infocard
              backgroundImage="img/spots/spot-disjuntores.png"
            />
            <Infocard
              backgroundImage="img/spots/spot-cabos.png"
            />
            <Infocard
              backgroundImage="img/spots/spot-cabos.png"
              middle
            />
            <Infocard
              backgroundImage="img/spots/spot-cabos.png"
              middle
            /> */}
          </div>
        </div>
      </section>
    </>
  )
}