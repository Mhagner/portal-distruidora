export function Newsletter() {
    return (
        <div className="newslatter-item">
            <h5>Newsletter</h5>
            <p>Informe o seu e-mail e assine nossa newsletter para receber novidades e ofertas.</p>
            <form action="#" className="subscribe-form">
                <input type="text" placeholder="Insira o seu -mail" />
                <button type="button">Assinar</button>
            </form>
        </div>
    )
}