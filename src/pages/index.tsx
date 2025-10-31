// ** Landing sections Import
import Feature from 'src/views/landing/feature'
import Property from 'src/views/landing/property'
import Faq from 'src/views/landing/faq'
import NewListing from 'src/views/landing/newlisting'
import Price from 'src/views/landing/price'
import Landing from 'src/views/landing/landing'
import ScrollToTop from 'src/@core/components/scrollToTop'

const LandingPage = () => {
  return (
    <>
      <Landing />
      <Feature />
      <Property />
      <NewListing />
      <Price />
      <Faq />
      <ScrollToTop />
    </>
  )
}

LandingPage.guestGuard = true

export default LandingPage
