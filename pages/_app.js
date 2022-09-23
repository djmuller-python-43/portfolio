import { ThemeProvider } from '@mui/material'
import theme from '../components/lib/theme'
import Head from 'next/head'

//Stylesheets
import '../styles/globals.css'
import "../styles/main.scss";
import '../styles/main.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../components/Profile/main.css'
import '../components/ContactForm/contact.scss'
import 'react-toastify/dist/ReactToastify.css';
import '../components/Rain/index.css'

// Fontawesome Icons
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <ThemeProvider theme = { theme }>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
    )
}

export default MyApp
