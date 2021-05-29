import { Breadcrumb } from '../../components/Breadcrumb'
import { TitlePage } from '../../components/TitlePage'
import { NextSeo } from 'next-seo'

export default function Polices() {
    return (
        <>
            <NextSeo
                title="Política de privacidade"
                description="Veja nossa política de privacidade"
            />
            <Breadcrumb pageName="Política de privacidade" />
            <div className="container pl-4 pr-4">
                <TitlePage description="Política de " descriptionSpan="Privacidade" />
                <div className="row">
                    <div className="col-lg-12 mb-4 institucional">
                        <p>
                            Nós da <span>Portal Distribuidora</span> não armazenamos nenhuma informação dos nossos clientes que não
                            sejam as necessárias para efetivar uma transação.
                        </p>
                        <p>
                            Caso tenha qualquer dúvida ou sugestão sobre a nossa Segurança e Privacidade, não deixe de nos contatar.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}