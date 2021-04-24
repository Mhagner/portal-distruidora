import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
