export function TitlePage({
    description,
    descriptionSpan,
    left
}) {
    return (
        <>
            {!left ?
                <div>
                    <h2 className="title-page text-center mt-4 mb-4">
                        {description}{' '}
                        <span>{descriptionSpan}</span>
                    </h2>
                </div>
            :
                <div className="title-shelf-row">
                    <h2 className="title-shelf">
                        {description}{' '}
                        <span>{descriptionSpan}</span></h2>
                </div>
            }
        </>
    )
}