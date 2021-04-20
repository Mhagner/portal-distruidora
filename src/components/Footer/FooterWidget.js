import Link from 'next/link'

export function FooterWidget({ title, items }) {
    return (
        <div className="footer-widget">
            <h5>{title}</h5>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url}>{item.description}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}