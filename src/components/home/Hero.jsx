import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
export default function Hero() {
    const navigate = useNavigate();
    return (
        <>
            <div className="md:mt-2 w-full px-4 py-12 relative md:rounded-md" style={{ background: `radial-gradient( ellipse 160% 85% at 100% 120%, rgb(251,235,223) 0%, rgb(249,204,174) 1%, rgb(235,164,113) 20%, rgb(210,118,58) 50%, rgb(166,75,19) 63%, rgb(109,43,2) 75%, rgb(63,21,1) 84%, rgb(24,7,0) 92%, rgb(7,3,0) 97%, rgb(0,0,0) 100% )` }}>
                <div className="flex flex-col md:flex-row w-full h-full items-center justify-between gap-4 p-4 px-6">
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <h1 className="text-4xl font-bold text-heading text-gray-100 w-[300px]">Discover Your Next Favorite Movie</h1>
                    </div>
                    <div className="flex flex-col gap-4 w-full items-end md:w-[400px]">
                        <h2 className="mr-auto md:mr-revert text-xl md:text-2xl font-bold text-heading text-gray-100 underline">Unlimited Access to the Best Movies Details</h2>
                        <p className="mr-auto md:mr-revert  text-md font-medium text-heading text-gray-100">Browse All Movie Details for Free in NTF Movies</p>
                        <div className=" mr-auto md:mr-revert  ">
                            <button type="button" className="cursor-pointer bg-gray-100 hover:bg-gray-150 text-black font-medium py-2 px-4 rounded flex gap-2 items-center" onClick={() => navigate("/movies")}>
                                Explore Now <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


<button type="button" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/movies")}>
    Explore Now
</button>

