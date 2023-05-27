// This component is used to scroll to top on changing the Route

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTopOnRouting() {

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTopOnRouting