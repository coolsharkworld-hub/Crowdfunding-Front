// ** React Imports
import { ReactNode, ReactElement, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useSelector } from 'src/store'

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = ({ children }: GuestGuardProps) => {
  const router = useRouter()
  const { isLoggedIn } = useSelector(state => state.auth)

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (isLoggedIn) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route])

  return <>{children}</>
}

export default GuestGuard
