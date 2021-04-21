import Link from 'next/link'

export function SingleBanner({ banners }) {
    return (
        <div className="banner-section spad">
            <div className="container">
                <div className="row">
                    {banners.map((banner, index) => (
                        <div key={index} className="col-lg-4 mb-32">
                            <Link href={banner.link}>
                                <div className="single-banner">
                                    <img src={banner.image} alt={banner.title} />
                                    <div className="inner-text">
                                        <h4>{banner.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}