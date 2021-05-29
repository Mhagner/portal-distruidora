import { NextSeo } from 'next-seo'
import { Benefits } from "../components/Home/Benefits";
import { Slider } from "../components/Home/Slider";
import { carousel, benefits, logos } from '../data'
import { ProcessTopBar } from "../components/ProcessTopBar"
import { ContentCategory } from "../components/Home/ContentCategory";
import { BannerPromo } from "../components/Home/BannerPromo";


export default function Home() {
  return (
    <>
      <NextSeo
        title="Home"
        description="A Portal Distribuidora iniciou suas atividades em 2007 com o intuito de atender as demandas da construção civil de materiais elétricos e iluminação na região de Goiânia - GO."
      />
      <ProcessTopBar />
      <Slider items={carousel} timeInterval="5000" />
      <Benefits benefits={benefits} />
      <ContentCategory />
      <section className="content__category content__category--white">
        <div className="container">
          <div className="container-infocard">
            <BannerPromo
              backgroundImage="img/banner-home/ferramentas.png"
            />
            <BannerPromo
              backgroundImage="img/banner-home/interruptores.png"
            />
          </div>
        </div>
      </section>
    </>
  )
}