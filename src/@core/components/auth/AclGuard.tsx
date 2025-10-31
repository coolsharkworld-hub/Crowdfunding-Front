// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import Error403 from 'src/pages/403'
import Layout from 'src/layouts'
import { useSelector } from 'src/store'

interface AclGuardProps {
  children: ReactNode
  authGuard?: boolean
  guestGuard?: boolean
}

const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const { children, guestGuard = false, authGuard = true } = props

  const { isLoggedIn } = useSelector(store => store.auth)

  // ** Hooks
  const router = useRouter()

  if (guestGuard || router.route === '/404' || !authGuard) {
    return <>{children}</>
  }

  if (isLoggedIn) {
    return <>{children}</>
  }

  return (
    <Layout>
      <Error403 />
    </Layout>
  )
}

export default AclGuard
