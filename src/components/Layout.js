import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { ProcessTopBar } from "./ProcessTopBar"

export function Layout({ children }) {
    return (
        <>
            <ProcessTopBar />
            <Header />
            {children}
            <Footer />
        </>
    )
}
