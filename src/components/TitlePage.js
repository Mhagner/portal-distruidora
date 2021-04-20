export function TitlePage({
    description,
    descriptionSpan
}) {
    return (
        <div>
            <h2 className="title-page text-center mt-4 mb-4">
                {description}{' '}
                <span>{descriptionSpan}</span>
                </h2>
        </div>
    )
}