import '../styles/globals.css'
import Layout from '../components/Layout';
import { Children } from 'react/cjs/react.production.min'

function MyApp({ Component, pageProps }){
  return (
    <div className=''>
      <Layout>
        <Component />
      </Layout>
    </div>
  );
}

export default MyApp
