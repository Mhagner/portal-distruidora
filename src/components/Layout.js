import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { Preloader } from "./Preloader"



export function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
