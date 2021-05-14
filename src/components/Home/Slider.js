export function Slider({ timeInterval, items }) {
    const indicators = items.map((item, index) => (
        <li key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={`${(item.active) ? 'active' : ''}`}
        />
    )) || []

    const sliders = items.map((item, index) => (
        <div
            key={index}
            className={`carousel-item ${(item.active) ? 'active' : ''}`}>
            <img
                className="d-block w-100"
                src={item.image} alt={item.alt}
            />
        </div> || []
    ))

    return (
        <section className="content__category content__category--grey">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"
                data-interval={timeInterval}>
                <ol className="carousel-indicators">
                    {indicators}
                </ol>
                <div className="carousel-inner">
                    {sliders}
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <div className="arrow-container">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                    </div>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <div className="arrow-container">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                    </div>
                    <span className="sr-only">Próximo</span>
                </a>
            </div >
        </section>

    )
}