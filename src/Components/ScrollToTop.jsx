import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to top (or to anchor) whenever the route changes.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash (anchor), try to scroll to that element first
    if (hash) {
      // small delay to allow element to render
      setTimeout(() => {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return
        }
        // fallback to top if anchor not found
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }, 50)
      return
    }

    // Default: scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

export default ScrollToTop
