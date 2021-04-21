import { ProductItem } from '../ProductItem'

export function ProductList({ products }) {
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
                        <p>{products.length} produtos listados</p>
                    </div>
                </div>

            </div>
            <div className="product-list">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-lg-3 col-sm-6">
                            <ProductItem
                                key={product.id}
                                marca={product.marca}
                                productDescription={product.productDescription}
                                image={product.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}