import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../component/Loading";

const MovieDetail = () => {
    const [movie, setMovies] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3001/movies/'+ id )
            .then(res => {
                if (!res.ok) {
                    throw Error('cannot fetch data')
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                setIsPending(false);
                setMovies(data);
            })
        }, 500)
    }, [])
    
    return (
        <div className="movie-detail">
            {isPending && <Loading /> }
            {movie && (
                <article>
                    <h2>{movie.title}</h2>
                    <p>{movie.release_year}</p>
                    <p>{movie.distributor}</p>
                    <div>{movie.locations}</div>
                    <button>{movie.favorite? "⭐️":"즐겨찾기"}</button>
                    <button>리뷰 작성</button>
                </article>
            )}
        </div>
    )

}

export default MovieDetail;