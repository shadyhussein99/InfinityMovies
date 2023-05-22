import { useState, useEffect } from "react";

function BackToTopButton() {

    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })

    }, [backToTop])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return <div>
        {backToTop && <button className="backToTop-button" onClick={scrollUp}>^</button>}
    </div>
}

export default BackToTopButton