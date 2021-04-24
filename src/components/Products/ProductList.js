import { ProductItem } from '../ProductItem'

export function ProductList({ products, urlApi }) {
    return (
        <>
            <div class="product-show-option">
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <div className="select-option">
                            <select className="sorting">
                                <option value>Default Sorting</option>
                            </select>
                            <select className="p-show">
                                <option value>Show:</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 text-right">
                        <p>{(products.length > 1)?
                        `${products.length} produstos listados`:
                        `${products.length} produto listado`}</p>
                    </div>
                </div>

            </div>
            <div className="product-list">
                <div className="row">
                    {products.map((product) => {
                        let url = product.image[0].url

                        return (
                            <ProductItem
                                key={product.id} 
                                image={`${urlApi}${url}`}
                                productDescription={product.productDescription}
                                marca={product.marca}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}