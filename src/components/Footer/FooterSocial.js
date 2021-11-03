export function FooterSocial({ urlInstagram, urlFacebook, urlWhatsapp }) {
    return (
        <div className="footer-social">
            <a href={urlFacebook || 'https://pt-br.facebook.com/portaldistribuidora/'}><i className="fa fa-facebook" /></a>
            <a href={urlInstagram || 'https://www.instagram.com/distribuidoraportal/'}><i className="fa fa-instagram" /></a>
            <a href={urlWhatsapp || 'https://api.whatsapp.com/message/IH3AWX7MICS5I1'}><i className="fa fa-whatsapp" /></a>
        </div>
    )
}
