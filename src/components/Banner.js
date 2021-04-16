export function Banner({ image, title, description }) {
    return (
        <div class="col-lg-3">
            <div class="product-large set-bg" data-setbg={image}>
                <h2>{title}</h2>
                <a href="#">{description}</a>
            </div>
        </div>
    )
}

{/* <div class="col-lg-3">
    <div class="product-large set-bg" data-setbg="img/products/women-large.jpg">
        <h2>Women’s</h2>
        <a href="#">Discover More</a>
    </div>
</div> */}