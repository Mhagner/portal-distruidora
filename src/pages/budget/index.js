import { Breadcrumb } from '../../components/Breadcrumb'
import { NextSeo } from 'next-seo'

export default function Budget() {
    return (
        <>
            <NextSeo
                title="Solicitar orçamento"
                description="Orçamentos"
            />
            <Breadcrumb pageName="Orçamentos" />
            <div className="container pl-4 pr-4"></div>
        </>
    )
}