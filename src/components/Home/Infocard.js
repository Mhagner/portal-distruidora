export function Infocard({
    backgroundImage,
    middle,
    large
}) {
    return (
        <div className={
            `infocard 
            ${middle ? 'middle' : ''}
            ${large ? 'large' : ''}`
        } style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat"
        }}>
        </div>
    )
}