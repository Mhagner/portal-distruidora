import { menu } from '../../data'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function MainCategories() {
    const { pathname } = useRouter()

    return (
        <nav className="nav-menu mobile-menu">
            <ul>
                {menu.map((item, index) => (
                    <li key={index} className={item.link === pathname ? 'active' : ''}>
                        <Link href={item.link}>
                            <a>{item.description}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}