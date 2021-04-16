export function Benefits({ benefits }) {
    return (
        <div className="container">
            <div className="benefit-items">
                <div className="row">
                    {benefits.map((item, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="single-benefit">
                                <div className="sb-icon">
                                    <img src={item.icon} alt={item.alt} />
                                </div>
                                <div className="sb-text">
                                    <h6>{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}