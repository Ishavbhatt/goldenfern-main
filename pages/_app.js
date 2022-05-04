import '../styles/globals.css'
import '../styles/css/style.css'
import '../styles/css/responsive.css'


import '../styles/css/animations.css'

import 'bootstrap/dist/css/bootstrap.min.css';



import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  <script src='jquery.js'></script>

  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

         


export default MyApp 
