import MovieCard from "../Components/MovieCard"
import { useState, useEffect } from "react";
import {searchMovies,getPopularMovies} from "../Services/api"
import "../css/Home.css";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }
            catch(error){
                console.log(error)
                setError("Failed to load...")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handldSearch = async (e) =>{
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }
        catch(error){
            console.log(error)
            setError("Failed to search movies...")
        }
        finally{
            setLoading(false)
        }

        setSearchQuery("----");
    }

    return (
    <div className="home">
        <form onSubmit={handldSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
            <p>{searchQuery}</p>
        </form>

        {error &&  <div className="error-message">{error}</div>}
        {loading ? (
        <div className="loading">Loading...</div>
        ) : (
        <div className="movies-grid">
            {movies.map(
                (movie) => 
            (
                <MovieCard movie={movie} key={movie.id}/>
            )
        )}
        </div>
        )}
    </div>
    );
}

export default Home;