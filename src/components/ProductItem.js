import Link from 'next/link'

export function ProductItem({
    image,
    marca,
    productDescription,
    key,
    slug
}) {
    return (
        <div key={key} className="product-item">
            <div className="pi-pic">
                <img src={image} alt />
                {/* <div className="sale">Sale</div> */}
                {/*  <div className="icon">
                    <i className="icon_heart_alt" />
                </div> */}
                <ul>
                    <li className="w-icon active"><a href="#"><i className="icon_zoom-in_alt" /></a></li>
                    <li className="quick-view">
                        <Link href={{
                            pathname: '/products/[slug]',
                            query: { slug: slug }
                        }} >
                            <a>Ver detalhes</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="pi-text">
                <div className="catagory-name">{marca}</div>
                <p>{productDescription}</p>
                {/* <div className="product-price">
                    $14.00
      <span>$35.00</span>
                </div> */}
            </div>
        </div>

    )
}