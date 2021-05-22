import { HeaderTop } from "./HeaderTop";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";

export function Header() {
    return (
        <header className="header-section">
           <HeaderTop />
            <div className="container">
                <div className="inner-header">
                    <div className="row">
                        <Logo />
{/*                         <SearchBar /> */}
                    </div>
                </div>
            </div>
            <NavBar />
        </header>
    )
}
