export function Benefits({ benefits }) {
    return (
        <section className="content__category content__category--white">
            <div className="container">
                <div className="benefit-items">
                    <div className="row">
                        {benefits.map((item, index) => {
                            const [icon] = item.icon
                            return (    
                                <div key={index} className="col-lg-4">
                                    <div className="single-benefit">
                                        <div className="sb-icon">
                                            <img src={icon.url} alt={icon.alternativeText} />
                                        </div>
                                        <div className="sb-text">
                                            <h6>{item.title}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section >

    )
}