import { Layout } from '../components/Layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

/* export async function getStaticProps() {
  const res = await instance.get('/categories');
  const categories = res.data;

  return {
      props: {
          categories
      },
      revalidate: 5
  }
}
 */