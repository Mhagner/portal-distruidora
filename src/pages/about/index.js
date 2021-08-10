import { NextSeo } from 'next-seo'
import ReactMarkdown from 'react-markdown'
import { Breadcrumb } from '../../components/Breadcrumb'
import { FooterSocial } from '../../components/Footer/FooterSocial'
import { TitlePage } from '../../components/TitlePage'
import Image from 'next/image'
import portalPhoto from '../../../public/img/svg/portal.png'
import { instance } from '../../config';


function About({ about }) {
    const { About: [
        {
            title,
            description,
            image: [
                {
                    url,
                    alternativeText
                }
            ]
        }
    ] } = about

    return (
        <>
            <NextSeo
                title={title}
                description={description}
            />
            <Breadcrumb pageName={title} />
            <div className="container pl-4 pr-4">
                <TitlePage description="Sobre" descriptionSpan="nós" />
                <div className="row">
                    <div className="col-lg-6 mb-4 institucional">
                        <ReactMarkdown>{description}</ReactMarkdown>
                        <FooterSocial 
                           /*  urlInstagram={instagram}
                            urlFacebook={facebook}
                            urlWhatsapp={whatsapp} */
                        />
                    </div>
                    <div className="col-lg-6 mb-4 image-portal">
                        <Image
                            src={url}
                            alt={alternativeText}
                            width={600}
                            height={500}
                            /* placeholder="blur" */
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await instance.get('/about')
    const about = res.data

    return {
        props: {
            about
        },
        revalidate: 2
    }
}

export default About