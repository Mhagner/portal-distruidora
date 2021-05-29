export function BannerPromo({
    backgroundImage,
    middle,
    large
}) {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            width: 600,
            height: 200
        }}>
        </div>
    )
}