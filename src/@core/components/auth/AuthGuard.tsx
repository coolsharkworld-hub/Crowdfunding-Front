// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useSelector } from 'src/store'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter()
  const { isLoggedIn } = useSelector(state => state.auth)

  useEffect(
    () => {
      if (!router.isReady) {
        return
      }
      if (!isLoggedIn) {
        if (router.asPath !== '/') {
          router.replace({
            pathname: router.asPath,
            query: { returnUrl: router.asPath }
          })
        } else {
          router.replace('/')
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  )

  return <>{children}</>
}

export default AuthGuard
