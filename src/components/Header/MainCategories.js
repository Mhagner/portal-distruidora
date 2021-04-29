import { menu } from '../../data'
import Link from 'next/link'

export function MainCategories() {

    return (
        <nav className="nav-menu mobile-menu">
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>
                            <a>{item.description}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}