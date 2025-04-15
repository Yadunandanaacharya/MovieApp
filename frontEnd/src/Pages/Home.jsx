import MovieCard from "../Components/MovieCard"
import { useState } from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id:1, title:'john wick', release_date:"2020"},
        {id:2, title:'terminator', release_date:"1999"},
        {id:3, title:'matrix', release_date:"1998"},
    ];

    const handldSearch = (e) =>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("----");
    }

    return <div className="home">
        <form onSubmit={handldSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
            <p>{searchQuery}</p>
        </form>

        <div className="movies-grid">
            {movies.map(movie => 
            movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}

export default Home;