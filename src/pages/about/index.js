import { Breadcrumb } from '../../components/Breadcrumb'
import { FooterSocial } from '../../components/Footer/FooterSocial'
import { TitlePage } from '../../components/TitlePage'

export default function About() {
    return (
        <>
            <Breadcrumb pageName="Quem somos" />
            <div className="container pl-4 pr-4">
                <TitlePage description="Sobre" descriptionSpan="nós" />
                <div className="row">
                    <div className="col-lg-6 mb-4 institucional">
                        <p>
                            A <span>Portal Distribuidora</span> iniciou suas atividades em 2007 com o intuito de atender as demandas
                    da construção civil de materiais elétricos e iluminação na região de Goiânia - GO.
                    </p>
                        <p>
                            Contamos com diversos itens do nosso portfólio em estoque em nossa sede própria
                            atendendo o público Atacado e Varejo com preços competitivos
                            e pagamentos facilitados.
                    </p>
                        <p>
                            Entregamos em toda região metropolitana de Goiânia e também
                            enviamos nossos produtos para todo o Brasil
                            através de transportadoras parceiras.
                    </p>
                        <FooterSocial />
                    </div>
                    <div className="col-lg-6 mb-4 image-portal">
                        <img src="img/svg/portal.png"></img>
                    </div>
                </div>


            </div>
        </>
    )
}