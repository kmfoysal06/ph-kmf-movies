import { Star, CalendarDays } from "lucide-react";
import MovieDetailsModal from "./MovieDetailsModal";
import { useState } from "react";

import SiteLogo from "../assets/logo.png";

export default function MovieCard({ movie }) {
    const [modalOpen, setModalOpen] = useState(false);

    const movieId = movie?.id;
    const mediumImage = movie?.image?.medium;
    const originalImage = movie?.image?.original;
    const name = movie?.name;
    const releaseDate = movie?.premiered;
    const rating = movie?.rating?.average ?? ' N/A ';



    const poster = mediumImage || originalImage || SiteLogo;
    return (
        <>
            <div className="flex flex-col w-full bg-gray-200 rounded-base gap-2 border border-gray-300 p-4 rounded-md">
                <div className="w-full aspect-square relative rounded-md">
                    <img src={poster} alt="Movie Poster" className="w-full cursor-pointer h-full object-cover rounded-md" loading="lazy" onClick={() => setModalOpen(true)} />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-heading mb-1 cursor-pointer" onClick={() => setModalOpen(true)}>{name}</h3>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-1"><Star size={20} /> <p className="text-sm text-gray-600">Release Date: {releaseDate}</p></div>
                        <div className="flex gap-1"><CalendarDays size={20} /> <p className="text-sm text-gray-600">Rating: {rating}/10</p></div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="button" className="w-full cursor-pointer bg-[#d2773b] hover:bg-[#d8774b] text-white font-medium py-2 px-4 rounded mt-2" onClick={() => setModalOpen(true)}>
                        View Details
                    </button>
                </div>
            </div>
            {modalOpen && (
                <MovieDetailsModal movie={movie} onClose={() => setModalOpen(false)} />
            )}
        </>
    )
}
