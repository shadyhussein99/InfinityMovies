import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/bundle';

function NewestMovies() {

    const [newestMovies, setNewestMovies] = useState<string[]>([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9642c68d4c399a387d2f64c0680f0bc7&language=en-US&sort_by=popularity.desc&page=1")
            .then(res => res.json())
            .then(res => setNewestMovies(res))
            .catch(err => console.log(err))
    }, [])

    return <section>
        <h2>What's New</h2>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    </section>
}

export default NewestMovies
