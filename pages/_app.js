import Script from 'next/script'
import { Provider } from 'next-auth/client'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
        crossOrigin='anonymous'
      ></Script>

      <div className='container'>
        <Component {...pageProps} />
      </div>

      <ToastContainer />
    </Provider>
  )
}

export default MyApp
