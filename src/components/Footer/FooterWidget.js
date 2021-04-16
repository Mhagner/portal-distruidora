export function FooterWidget({ title, items }) {
    return (
        <div className="footer-widget">
            <h5>{title}</h5>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href="#">{item.description}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}