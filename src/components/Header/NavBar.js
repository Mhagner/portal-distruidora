export function NavBar() {
    return (
        <div className="nav-item">
            <div className="container">
                <div className="nav-depart">
                    <div className="depart-btn">
                        <i className="ti-menu" />
                        <span>Todas as categorias</span>
                        <ul className="depart-hover">
                            <li className="active"><a href="#">Categoria 1</a></li>
                            <li><a href="#">Categoria 2</a></li>
                            {/* <li><a href="#">Underwear</a></li>
                                <li><a href="#">Kid's Clothing</a></li>
                                <li><a href="#">Brand Fashion</a></li>
                                <li><a href="#">Accessories/Shoes</a></li>
                                <li><a href="#">Luxury Brands</a></li>
                                <li><a href="#">Brand Outdoor Apparel</a></li> */}
                        </ul>
                    </div>
                </div>
                <nav className="nav-menu mobile-menu">
                    <ul>
                        <li /* className="active" */><a href="#">Cabos</a>
                            <ul className="dropdown">
                                <li><a href="#">Cabos 1</a></li>
                                <li><a href="#">Cabos 2</a></li>
                                <li><a href="#">Cabos 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Tomadas</a></li>
                        <li><a href="#">Iluminação</a></li>
                        <li><a href="#">Lampadas</a></li>
                        <li><a href="#">Leds</a></li>
                                
                        {/*  <li><a href="./shop.html">Shop</a></li>
                            <li><a href="#">Collection</a>
                                <ul className="dropdown">
                                    <li><a href="#">Men's</a></li>
                                    <li><a href="#">Women's</a></li>
                                    <li><a href="#">Kid's</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="./check-out.html">Checkout</a></li>
                                    <li><a href="./faq.html">Faq</a></li>
                                    <li><a href="./register.html">Register</a></li>
                                    <li><a href="./login.html">Login</a></li>
                                </ul>
                            </li> */}
                    </ul>
                </nav>
                <div id="mobile-menu-wrap" />
            </div>
        </div>
    )
}