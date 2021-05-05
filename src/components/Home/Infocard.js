export function Infocard({
    backgroundImage
}) {
    return (
        <div className="container">
            <section className="infocard" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat"
            }}>
            </section>
        </div>

    )
}