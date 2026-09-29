import '../css/Favorites.css'
import {useMovieContext} from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
function Favourite(){
    const {favorites} = useMovieContext()

    if(favorites){
        return(
            <div className="favourites">
            <h2>Your Favourite </h2>
            
            <div className="favourites-grid">
            <div className="movie-grid">
                {
                  favorites.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}/>
                ))
                }
             
            </div>
            </div>
         </div>
        )
    }
    return(
        <div classsName="favourites-empty">
            <h2>No Favourite Movies Yet</h2>
            <p>Start adding movies to your favourites and they will appear here.</p>
        </div>
    )
}
export default Favourite