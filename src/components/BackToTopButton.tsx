import { useState, useEffect } from "react";

function BackToTopButton() {

    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        if (window.scrollY > 200) {
            setBackToTop(true)
        } else {
            setBackToTop(false)
        }
    }, [backToTop])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return <div>
        {backToTop && <button onClick={scrollUp}>^</button>}
    </div>
}

export default BackToTopButton