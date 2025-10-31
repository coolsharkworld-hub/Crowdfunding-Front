import { useEffect, useState } from 'react'

/**
 * useScrollingUp
 * @returns {boolean}
 */
const useScrollingUp = () => {
  let prevScroll = window.pageYOffset
  const [scrollingUp, setScrollingUp] = useState(false)
  const handleScroll = () => {
    const currScroll = window.pageYOffset
    const isScrolled = prevScroll > currScroll
    setScrollingUp(currScroll === 0 ? false : isScrolled)
    prevScroll = currScroll
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollingUp
}

export default useScrollingUp
