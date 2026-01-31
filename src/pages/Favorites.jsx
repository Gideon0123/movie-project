import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
import "../css/Favorites.css"

function Favorites() {
    const { favorites } = useMovieContext();

    return (
        favorites && favorites.length > 0 ? (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        ) : (
            <div className="favorites-empty">
                <h2>No Favorite Movies Yet</h2>
                <p>Start adding movies to your favorite and they will appear here</p>
            </div>
        )
    )

    // if (favorites) {
    //     return (
    //         <div className="favorites">
    //             <h2>Your Favorites</h2>
    //             <div className="movies-grid">
    //                 {favorites.map((movie) => (
    //                     <MovieCard movie={movie} key={movie.id} />
    //                 ))}
    //             </div>
    //         </div>
    //     );
    // }

    // return (
    //     <div className="favorites-empty">
    //         <h2>No Favorite Movies Yet</h2>
    //         <p>Start adding movies to your favorite and they will appear here
    //         </p>
    //     </div>
    // )
}

export default Favorites