export function FooterSocial({ urlInstagram, urlFacebook, urlWhatsapp }) {
    return (
        <div className="footer-social">
            <a href={urlFacebook || '#'}><i className="fa fa-facebook" /></a>
            <a href={urlInstagram || '#'}><i className="fa fa-instagram" /></a>
            <a href={urlWhatsapp || '#'}><i className="fa fa-whatsapp" /></a>
        </div>
    )
}