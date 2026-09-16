import { useState } from "react";
import { getMovies } from "../../services/get_movies";
import MovieCard from "../MovieCard";
import { useEffect } from "react";
import FullScreenLoading from "../FullScreenLoading";

export default function CurrentlyAiring() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const endpoint = 'https://api.tvmaze.com/schedule/web?country=US&limit=10';

    useEffect(() => {
        setLoading(true);
        getMovies(endpoint).then((data) => {
            setMovies(data);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setLoading(false);
        });

        return () => {
            setMovies([]);
            setError(null);
        }

    }, [])

    return (
        <>
            <div className="flex flex-col w-full max-w-screen-xl">
                <div className="flex flex-col w-full px-4 py-2 bg-gray-200 rounded-base my-4">
                    <h2 className="text-2xl font-semibold text-heading mb-4">Currently Airing</h2>
                    {loading ? (
                        <FullScreenLoading />
                    ) : error ? (
                        <div className="flex justify-center items-center w-full h-64">
                            <p className="text-red-500 text-md font-medium">{error}</p>
                        </div>
                    ) : (
                        movies.length > 0 ? (

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                { 
                                    movies.map((movie) => {
                                        const show = movie?._embedded?.show || movie?.show || movie;
                                        return <MovieCard key={show.id} movie={show} />
                                    })
                                }

                            </div>
                        ) : (
                            <div className="flex justify-center items-center w-full h-64">
                                <p className="text-gray-600 text-md font-medium">No currently airing shows found.</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}
