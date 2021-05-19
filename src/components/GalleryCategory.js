import Image from "next/image"

export function GalleryCategory({ photos }){

    console.log(photos)

    return (
        <div className="gallery__container">
            {photos.map((photo) => (
                <Image 
                    className="gallery__image"
                    src={photo.image}   
                    alt={photo.alt}
                    width={photo.width} 
                    height={photo.height}
                />
            ))}
        </div>
    )
}