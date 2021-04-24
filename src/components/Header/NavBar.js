import { MainCategories } from './MainCategories'
import { MenuAllCategories } from './MenuAllCategories'

export function NavBar() {
    return (
        <div className="nav-item">
            <div className="container">
                <MenuAllCategories />
                <MainCategories />
                <div id="mobile-menu-wrap" />
            </div>
        </div>
    )
}
