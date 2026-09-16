export default function Hero() {
    return <div className="flex w-full h-screen flex-col  bg-[url('https://static.tvmaze.com/uploads/images/original_untouched/610/1525272.jpg')] bg-cover bg-center relative">
            <div className="w-[300px] h-[200px] bg-black/50 flex flex-col justify-center rounded-lg absolute bottom-0 right-0 p-3 px-5">
                <h1 className="text-2xl text-blue-200">All Movie Informations</h1>
                <p className="text-md  py-4 text-gray-600">Learn about all of your favourite movie and tv shows.</p>
                <div>
                    <button type="button" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalOpen(true)}>
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
}
