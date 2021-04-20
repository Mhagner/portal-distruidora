import Link from 'next/link'

export function Logo() {
    return (
        <div className="col-lg-2 col-md-2 logo-container">
            <div className="logo">
                <Link href="/">
                    <img src="img/logo-portal.png" />
                </Link>
            </div>
        </div>
    )
}