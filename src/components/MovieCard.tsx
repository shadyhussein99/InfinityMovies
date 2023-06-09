import { useDispatch } from 'react-redux';
import { searchMovie } from '../redux/selectSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from '../../node_modules/swiper';  // To declare the types of these properties
import 'swiper/css/bundle';

function MovieCard(props: any) {

    const dispatch = useDispatch()

    return <section>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                },
                600: {
                    slidesPerView: 3,
                },
                800: {
                    slidesPerView: 4,
                }
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {props.movies.map((value: any) => {
                return (
                    <SwiperSlide className="card-slide" key={value.id} onClick={() => dispatch(searchMovie({ name: value.name || value.title }))}>
                        <img src={`https://image.tmdb.org/t/p/w300/${value?.poster_path}`} alt="movie-img" />
                        <h3>{value?.title || value?.name}</h3>
                    </SwiperSlide>)
            })}
        </Swiper>
    </section >
}

export default MovieCard