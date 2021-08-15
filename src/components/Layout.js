import { useRouter } from 'next/router'
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { ProcessTopBar } from "./ProcessTopBar"
import WhatsAppWidget from 'react-whatsapp-widget'

import 'react-whatsapp-widget/dist/index.css'


export function Layout({ children }) {

    const router = useRouter()

    const isLandingPage = router.asPath === '/landingpage'

    return (
        <>
            <ProcessTopBar />
            {!isLandingPage && <Header/>}
            <WhatsAppWidget
                phoneNumber="5562995010927"
                companyName="Portal Distribuidora"
                textReplyTime="Atendimento Comercial"
                message='Olá, Em que posso te ajudar?'
                sendButton="Enviar mensagem"
            />
            {children}
            {!isLandingPage && <Footer />}
        </>
    )
}
