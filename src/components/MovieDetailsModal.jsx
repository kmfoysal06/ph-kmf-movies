import { Star } from "lucide-react";
import { Video } from "lucide-react";
import { TypeIcon } from "lucide-react";
import { SquareChartGantt } from "lucide-react";
import { Earth } from "lucide-react";
import { Layers2 } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { X } from "lucide-react";
import SiteLogo from "../assets/logo.png";

export default function MovieDetailsModal({ movie, onClose }) {
    const movieId = movie?.id;
    const originalImage = movie?.image?.original;
    const name = movie?.name;
    const releaseDate = movie?.premiered;
    const rating = movie?.rating?.average ?? ' N/A ';
    const imdbId = movie?.externals?.imdb;
    const overview = movie?.summary;
    const genres = movie?.genres;
    const language = movie?.language;
    const officialSite = movie?.officialSite;


    const poster = originalImage || SiteLogo || SiteLogo;

    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center bg-gray-900/60 z-100" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
                <div className="w-md aspect-2/3 p-5 bg-gray-100 shadow-xl rounded-md overflow-y-auto">
                    <div className="flex justify-between items-center mb-4 bg-gray-300 p-1 px-2 rounded-md">
                        <h2 className="text-lg font-bold">{name}</h2>
                        <button onClick={() => onClose()} className="w-8 h-8 p-1 flex justify-center items-center cursor-pointer"><X /></button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="w-full aspect-square relative rounded-md">
                            <img src={poster} alt="Movie Poster" className="w-full h-full object-cover rounded-md" loading="lazy" />
                        </div>
                        <div className="flex flex-col gap-0">
                            <h3 className="text-lg font-semibold text-heading">Details:</h3>
                            <hr />
                        </div>
                        <div className="flex flex-col gap-2 bg-gray-200 p-2 rounded-md">
                            <p className="text-sm text-gray-600 flex gap-1 items-center"> <Video size={14} /><u>Movie Name:</u> <b>{name}</b></p>
                        </div>
                        <div className="flex flex-col gap-2 bg-gray-200 p-2 rounded-md">
                            <p className="text-sm text-gray-600 flex gap-1 items-center"><CalendarDays size={14} /> <u>Release Date:</u> <b>{releaseDate}</b></p>
                            <p className="text-sm text-gray-600 flex gap-1 items-center"><Star size={14} /><u>Rating:</u> <b>{rating}</b>/10</p>
                        </div>
                        <div className="flex flex-col gap-2 bg-gray-200 p-2 rounded-md">
                            <p className="text-sm text-gray-600 flex gap-1 items-center"> <Layers2 size={14} /> <u>Genres:</u> <b>{genres.join(", ")}</b></p>
                            <p className="text-sm text-gray-600 flex gap-1 items-center"> <Earth size={14} /> <u>Language:</u> <b>{language}</b></p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 p-2 rounded-md">
                            <div className="text-sm text-gray-600"> <div className="flex gap-1 items-center"><SquareChartGantt size={14} /> <u>Overview:</u> </div></div>
                            <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: overview }}></div>
                        </div>
                        <div className="flex gap-2 mt-2 bg-gray-200 p-2 rounded-md justify-end">
                            {imdbId && <a href={`https://www.imdb.com/title/${imdbId}/`} target="_blank" className="text-sm text-gray-600 flex gap-1 items-center bg-blue-500 hover:bg-blue-700 p-2 text-white w-max rounded-md"><span>IMDB</span> <ExternalLink size={16} /> </a>}
                            {officialSite && <a href={officialSite} target="_blank" className="text-sm text-gray-600 flex gap-1 items-center bg-blue-500 hover:bg-blue-700 p-2 text-white w-max rounded-md"><span>Official Site</span> <ExternalLink size={16} /> </a>}

                            <a onClick={() => onClose()} target="_blank" className="text-sm cursor-pointer text-red-500 flex gap-1 items-center border border-red-500 hover:border-red-700 p-2 w-max rounded-md"><span>Close</span> <X size={16} /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
