import { useState, useEffect } from "react"

function ImageSlider() {

    const slider: string[] = ["slider1.PNG", "slider2.PNG", "slider3.PNG", "slider4.PNG", "slider5.PNG"]
    let [sliderImage, setSliderImage] = useState<string>("slider1.PNG")
    let [index, setIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index++)
            if (index === 5) {
                index = 0
            }
            setSliderImage(slider[index]);
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    return <header>

        <img className="slider-img" src={`/pics/image-slider/${sliderImage}`} alt="slider-img" />

        <div className="logo-div">
            <img className="logo-img" src="/pics/logo-primary.png" alt="logo" />
        </div>

        <div className="description-div">
            <h1>Unlimited movies, series and more</h1>
            <p>Find the latest news and information about movies and series on InfinityMovies</p>
        </div>
    </header>
}

export default ImageSlider