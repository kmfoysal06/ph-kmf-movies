import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import FullScreenLoading from "../components/FullScreenLoading";
import { getMovies } from "../services/get_movies";

export default function Movies() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const endpoint = "https://api.tvmaze.com/shows";

    useEffect(() => {
        setLoading(true);
        getMovies(endpoint).then((data) => {
            setMovies(data);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setLoading(false);
        });

        //cleanup 
        return () => {
            setMovies([]);
            setError(null);
        }

    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === "") {
            setError("Please enter a search query.");
            return;
        }

        setLoading(true);
        getMovies(`https://api.tvmaze.com/search/shows?q=${searchQuery}`).then((data) => {
            const shows = data.map(item => item.show);
            setMovies(shows);
            setError(null);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setLoading(false);
        });

    }

    return loading ? <FullScreenLoading /> : (
        <>
            <div className="flex flex-col w-full max-w-screen-xl">
                <div className="flex flex-col w-full px-4 py-2 bg-gray-200 rounded-md my-4">
                    <div className="flex flex-col w-full px-4 py-2 bg-gray-200 rounded-md my-4">
                        <h2 className="text-2xl font-semibold text-heading mb-4">Search Movies</h2>
                        <div className="flex gap-2 items-center w-full">
                            <form onSubmit={handleSearch} className="flex gap-2 items-center w-full">
                            <input      
                                 type="text"
                                 placeholder="Search for movies..."
                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                             />
                            <button type="submit" className="w-max cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Search
                            </button>
                            </form>
                    
                        </div>
                    </div>
                </div>
                {error && 
                    (
                        <div className="flex flex-col w-full px-4 py-2 bg-gray-200 rounded-md my-4">
                            <div className="text-red-500 text-md font-medium">{error}</div>
                        </div>
                    )
                }

                <div className="flex flex-col w-full px-4 py-2 bg-gray-200 rounded-md my-4">
                    <h2 className="text-2xl font-semibold text-heading mb-4">All Movies</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
                    </div>
                </div>
            </div>
        </>
    )
}
