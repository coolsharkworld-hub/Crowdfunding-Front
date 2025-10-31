// ** React imports
import { useEffect, useState } from 'react'

// ** MUI imports
import { IconButton } from '@mui/material'

// ** Icon imports
import { FaHandPointer } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    isVisible && (
      <IconButton
        onClick={scrollToTop}
        className='fixed bottom-5 left-[50%] -translate-x-2/4 bg-blue-500 dark:text-white text-libertyblue border-none rounded-lg p-2 cursor-pointer text-2xl flex items-center move-up-down z-50'
      >
        <FaHandPointer />
      </IconButton>
    )
  )
}

export default ScrollToTop
