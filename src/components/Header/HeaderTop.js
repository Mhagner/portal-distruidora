export function HeaderTop() {
    return (
        <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                        <i className=" fa fa-envelope" />
                    contato@portaldistribuidora.com.br
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-phone" />
                     (62) 3290-7222
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-whatsapp" />
                     (62) 3290-7222
                    </div>
                </div>
                <div className="ht-right">
                    <div className="top-social">
                        <a href="https://pt-br.facebook.com/portaldistribuidora/"><i className="ti-facebook" /></a>
                        <a href="https://www.instagram.com/distribuidoraportal/"><i className="ti-instagram" /></a>
                       {/*  <a href="#"><i className="ti-youtube" /></a>
                        <a href="#"><i className="ti-twitter-alt" /></a> */}
                       {/*  <a href="#"><i className="ti-linkedin" /></a>
                        <a href="#"><i className="ti-pinterest" /></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
