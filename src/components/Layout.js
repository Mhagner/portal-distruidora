import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { ProcessTopBar } from "./ProcessTopBar"
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

export function Layout({ children }) {
    return (
        <>
          
            <ProcessTopBar />
            <Header />
            <WhatsAppWidget
                phoneNumber="5562995010927"
                companyName="Portal Distribuidora"
                textReplyTime="Atendimento Comercial"
                message='Olá, Em que posso te ajudar?'
                sendButton="Enviar mensagem"
            />
            {children}
            <Footer />
        </>
    )
}
