// ** React Imports
import { ReactNode } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Loader Import
import NProgress from 'nprogress'

// ** Config Imports
import '../configs/i18n'
import themeConfig from '../configs/themeConfig'

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// ** Component Imports
import Layout from 'src/layouts'
import AclGuard from 'src/@core/components/auth/AclGuard'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import AuthGuard from 'src/@core/components/auth/AuthGuard'
import GuestGuard from 'src/@core/components/auth/GuestGuard'
import Web3Provider from 'src/context/Web3Context'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Global css styles
import '../../styles/globals.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persister, store } from 'src/store'
import ComponentLoading from 'src/@core/components/spinner/loading'
import { LoadingProvider } from 'src/context/LoadingContext'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
}

type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>)

  const authGuard = Component.authGuard ?? true

  const guestGuard = Component.guestGuard ?? false

  return (
    <Provider store={store}>
      <Web3Provider>
        <LoadingProvider>
          <PersistGate loading={null} persistor={persister}>
            <Head>
              <title>{`${themeConfig.appName} - Admin Panel`}</title>
              <meta name='description' content={`${themeConfig.appName} - This AdminPanel`} />
              <meta name='keywords' content={`${themeConfig.appName}`} />
              <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>
            <ThemeComponent>
              <Guard authGuard={authGuard} guestGuard={guestGuard}>
                <AclGuard authGuard={authGuard} guestGuard={guestGuard}>
                  {getLayout(<Component {...pageProps} />)}
                </AclGuard>
              </Guard>
              <Toaster toastOptions={{ className: 'react-hot-toast' }} />
              <ComponentLoading />
            </ThemeComponent>
          </PersistGate>
        </LoadingProvider>
      </Web3Provider>
    </Provider>
  )
}

export default App
