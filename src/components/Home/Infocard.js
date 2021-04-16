export function Infocard({
    title,
    description,
    textPrice,
    price,
    textButton,
    link,
    backgroundImage
}) {
    return (
        <div className="container">
            <section className="deal-of-week set-bg spad" data-setbg={backgroundImage}>
                {/* <div className="container"> */}
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <div className="product-price">
                                <span>{textPrice}</span> R$ {price}

                            </div>
                        </div>
                        <a href={`${link || '#'}`} className="primary-btn">{textButton}</a>
                    </div>
                {/* </div> */}
            </section>
        </div>

    )
}