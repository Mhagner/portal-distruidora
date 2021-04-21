import Link from 'next/link'

export function Breadcrumb({ pageName, pageNameCategories }) {
    return (
        <div className="breacrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-text">
                            <Link href="/"><a><i className="fa fa-home mr-2"/>Home</a></Link>
                            {pageNameCategories && 
                            <Link href="/categories"><a><i className="mr-2"/>Categorias</a></Link> }
                            <span>{pageName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}