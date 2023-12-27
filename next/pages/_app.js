import Layout from '@/komponenten/Layout';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'papercss/dist/paper.min.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  )
}
