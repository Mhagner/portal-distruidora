import { CopyrightReserved } from "./CopyrightReserved";
import { FooterSocial } from "./FooterSocial";
import { FooterWidget } from "./FooterWidget";
import { Newsletter } from "./Newslatter";

let items = [
    {description: "Quem somos"}, 
    {description: "Política de privacidade"}
]

export function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-left">
                            {/* <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello.colorlib@gmail.com</li>
                            </ul> */}
                           <FooterSocial />
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1">
                       <FooterWidget items={items} title="Informações" />
                    </div>
                   {/*  <div className="col-lg-2">
                        <div className="footer-widget">
                            <h5>My Account</h5>
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Shopping Cart</a></li>
                                <li><a href="#">Shop</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-lg-4">
                       <Newsletter />
                    </div>
                </div>
            </div>
            <CopyrightReserved />
        </footer>

    )
}