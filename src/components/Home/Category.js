import Image from 'next/image'
import Link from 'next/link'

export function Category({
    image,
    text,
    key,
    link
}) {
    return (
        <div className="container-category" key={key}>
            <Link href={link}>
                <div className="category-icon">
                    <Image
                        src={image}
                        alt={text}
                        width={90}
                        height={90}
                    />
                </div>
            </Link>
            <p>{text}</p>
        </div>
    )
}