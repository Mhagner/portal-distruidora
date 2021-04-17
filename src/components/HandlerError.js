export function HandlerError({ msg }) {
    msg = "Não foi possível carregar a coleção de produtos :("
    return (
        <p className="error">{msg}</p>
    )
}