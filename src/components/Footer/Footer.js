import { CopyrightReserved } from "./CopyrightReserved";
import { FooterSocial } from "./FooterSocial";
import { FooterWidget } from "./FooterWidget";
import { Newsletter } from "./Newslatter";

let items = [
    {description: "Quem somos", url: "/about"}, 
    {description: "Política de privacidade", url: "/polices"},
    {description: "Fale conosco", url: "/contact-us"}
    /* {description: "SAC - Serviços ao cliente", url: "/sac"}, */
]

export function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-left">
                            <ul>
                                <li>Av. Ville Qd 26 Lt 34 N° 1983 - Residencial Center Ville, Goiânia - GO</li>
                                <li>CEP: 74369-023</li>
                                <li>Telefone: (62) 3290-7222</li>
                                <li>Whatsapp: (62) 99501-0927</li>
                                <li>E-mail: comercial@portaldistribuidora.com.br</li>
                            </ul>
                           <FooterSocial />
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                       <FooterWidget items={items} title="Informações" />
                    </div>
                    <div className="col-lg-4">
                       <Newsletter />
                    </div>
                </div>
            </div>
            <CopyrightReserved />
        </footer>

    )
}