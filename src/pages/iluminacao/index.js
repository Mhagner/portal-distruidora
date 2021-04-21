import { Breadcrumb } from '../../components/Breadcrumb'
import { ProductList } from '../../components/Products/ProductList'
import { interruptores } from '../../data'

export default function Iluminacao() {
    return (
        <>
            <Breadcrumb pageName="Iluminação" pageNameCategories />
            <div className="container pl-4 pr-4">
                <ProductList products={interruptores}/>
            </div>
        </>
    )
}