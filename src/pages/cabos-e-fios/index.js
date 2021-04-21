import { Breadcrumb } from '../../components/Breadcrumb'
import { ProductList } from '../../components/Products/ProductList'
import { interruptores } from '../../data'

export default function CabosEFios() {
    return (
        <>
            <Breadcrumb pageName="Cabos e fios" pageNameCategories />
            <div className="container pl-4 pr-4">
                <ProductList products={interruptores} />
            </div>
        </>
    )
}