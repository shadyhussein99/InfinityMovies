import { useSelector } from "react-redux";

function MovieDetails() {

    const movie = useSelector((state: any) => state.search.value)

    return <main></main>
}

export default MovieDetails