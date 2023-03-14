import Head from "next/head";
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
			<Head>
				<title>RapidAPI Devrel Example - Hotel App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />;
		</>
  )
}

export default MyApp
