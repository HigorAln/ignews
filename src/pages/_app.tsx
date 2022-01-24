import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Provider as NextAuthProvider } from 'next-auth/client'

import '../styles/global.scss'
import { ContextSubscribeProvider } from '../context/ContextSubscribe'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ContextSubscribeProvider>
        <Header />
        <Component {...pageProps} />
      </ContextSubscribeProvider>
    </NextAuthProvider>
  )
}
