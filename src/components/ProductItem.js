export function ProductItem({image}) {
    return (
        <div className="product-item">
            <div className="pi-pic">
                <img src={image} alt />
                {/* <div className="sale">Sale</div> */}
               {/*  <div className="icon">
                    <i className="icon_heart_alt" />
                </div> */}
                <ul>
                    <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                    <li className="quick-view"><a href="#">Cotação</a></li>
                    <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                </ul>
            </div>
           {/*  <div className="pi-text">
                <div className="catagory-name">Coat</div>
                <a href="#">
                    <h5>Pure Pineapple</h5>
                </a>
                <div className="product-price">
                    $14.00
      <span>$35.00</span>
                </div>
            </div> */}
        </div>

    )
}