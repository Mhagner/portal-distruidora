import Link from 'next/link'
import { mainCategories, allCategories } from '../../data'

console.log(mainCategories)
console.log(allCategories)

export function NavBar() {
    return (
        <div className="nav-item">
            <div className="container">
                <div className="nav-depart">
                    <div className="depart-btn">
                        <i className="ti-menu" />
                        <span>Todas as categorias</span>
                        <ul className="depart-hover">
                            {mainCategories.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link}>
                                        <a>{item.description}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <nav className="nav-menu mobile-menu">
                    <ul>
                        {allCategories.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link}>
                                    <a>{item.description}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div id="mobile-menu-wrap" />
            </div>
        </div>
    )
}