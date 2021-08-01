export function BannerPromo({
    banners
}) {

    return (
        <section className="content__category content__category--white">
            <div className="container">
                <div className="container-infocard">
                    {banners.map((banner) => {
                        const [item] = banner.Image
                        console.log(banner.width)
                        return (
                            <div key={banner.id} style={{
                                backgroundImage: `url(${item.url})`,
                                backgroundRepeat: "no-repeat",
                                width: banner.width,
                                height: banner.height
                            }}>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}