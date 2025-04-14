import MovieCard from "../Components/MovieCard"

function Home(){
    const movies = [
        {id:1, title:'john wick', release_date:"2020"},
        {id:2, title:'terminator', release_date:"1999"},
        {id:3, title:'matrix', release_date:"1998"},
    ];

    const handldSearch = () =>{

    }

    return <div className="home">
        <form onSubmit={handldSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" />
        </form>

        <div className="movies-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}

export default Home;