import Loading from "./component/Loading";
import MovieList from "./movieComponent/MovieList";

const Home = ({movies, isPending}) => {
    return (
        <div className="home">
            {isPending && <Loading /> }
            {movies && <MovieList movies={movies} />}
        </div>
    )
}

export default Home;