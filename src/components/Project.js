import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }) // animaciones de 1s, se ejecutan solo 1 vez
  }, [])

  return <>{children}</>
}

export default Layout
