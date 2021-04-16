export function SearchBar() {
    return (
        <div className="col-lg-7 col-md-7">
            <div className="advanced-search">
                <button type="button" className="category-btn">Categorias</button>
                <div className="input-group">
                    <input type="text" placeholder="O que você precisa?" />
                    <button type="button"><i className="ti-search" /></button>
                </div>
            </div>
        </div>
    )
}