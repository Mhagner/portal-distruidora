import Image from "next/image"

export function GalleryCategory({ photos }) {
    return (
        <div className="gallery__container">
            {photos.map((photo) => {
                const [item] = photo.image
                return (
                    <Image
                        className="gallery__image"
                        src={item.url}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsz8z8DwAFEgJS6QmPFwAAAABJRU5ErkJggg=="}
                    />
                )
            })}
        </div>
    )
}