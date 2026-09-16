import { useState } from "react";
import Hero from "../components/home/Hero";
import CurrentlyAiring from "../components/home/CurrentlyAiring";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen w-full max-w-screen-xl">
            <Hero />
            <CurrentlyAiring />
        </div>
    )
}

export default Home;
