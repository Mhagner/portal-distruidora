export function SingleBanner({ banners }) {
    return (
        <div className="banner-section spad">
            <div className="container">
                <div className="row">
                    {banners.map((banner, index) => (
                        <div key={index} className="col-lg-4 mb-32">
                            <div className="single-banner">
                                <img src={banner.image} alt={banner.title} />
                                <div className="inner-text">
                                    <h4>{banner.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}