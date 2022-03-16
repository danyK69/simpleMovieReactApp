import {useState, useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=811deaca';

// const movie1 = {
//     "Title": "Batman Returns",
//     "Year": "1992",
//     "imdbID": "tt0103776",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
// }

const App = () =>{
    
    const [movies, setMovies] = useState([]);
    const [searcTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return(
        <div className='app'>
             <h1>MoviesNow</h1>
             <div className='search'>
                 <input
                 placeholder='Search for movies' 
                 value={searcTerm}
                 onChange={(e)=> setSearchTerm(e.target.value)}
                 />
                 <img src={SearchIcon} 
                 alt="search" 
                 onClick={() => searchMovies(searcTerm)}
                 />
             </div>

             {
                 movies?.length > 0
                 ?(
                    <div className='container'>
                        {movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div> 
                 ) : (
                     <div className='empty'>
                        <h2>No movies found!!</h2>
                     </div>
                         
                 )
             }

             {/* <div className='container'>
                <MovieCard movie1={movie1} />
             </div> */}
        </div>
    );
}

export default App;
 
