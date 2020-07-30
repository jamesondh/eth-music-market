import Head from 'next/head'
import '../styles/globals.css'

// State
import { GlobalContextProvider } from '../state/global.js';

// Components
import Header from '../components/header.js'

// UI elements
import Container from 'react-bootstrap/Container'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Head>
        <title>ETH Music Market</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <Container data-testid="container">
        <Component {...pageProps} />
      </Container>
      <link
        crossOrigin="anonymous"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        rel="stylesheet"
      />
    </GlobalContextProvider>
  )
  
}

export default MyApp
