import { Link } from "react-router-dom";

const MovieList = ({movies}) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div className="movie-preview" key={movie.id}> 
                <Link to={`/movies/${movie.id}`}>
                    <h2>{movie.title}</h2>
                    <p>Location {movie.locations}</p>
                    <p>{movie.favorite? "⭐️":""}</p> 
                </Link>
                 
                </div>
            ))}
        </div>
    )
}
export default MovieList;