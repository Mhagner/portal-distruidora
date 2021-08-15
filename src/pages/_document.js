import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* Google Font */}
                    <link href="https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
                    {/* Css Styles */}
                    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
                    <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
                    <link rel="stylesheet" href="css/themify-icons.css" type="text/css" />
                    <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
                    <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
                    <link rel="stylesheet" href="css/nice-select.css" type="text/css" />
                    <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css" />
                    <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
                    <link rel="stylesheet" href="css/style.css" type="text/css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                   
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
                    <script src="js/jquery-3.3.1.min.js"></script>
                    <script src="js/bootstrap.min.js"></script>
                    <script src="js/jquery-ui.min.js"></script>
                    <script src="js/jquery.countdown.min.js"></script>
                    <script src="js/jquery.nice-select.min.js"></script>
                    <script src="js/jquery.zoom.min.js"></script>
                    <script src="js/jquery.dd.min.js"></script>
                    <script src="js/jquery.slicknav.js"></script>
                    <script src="js/owl.carousel.min.js"></script>
                    <script src="js/main.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument