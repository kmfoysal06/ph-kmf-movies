import { ArrowUpAz } from "lucide-react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router";
import { ArrowUpRight } from "lucide-react";


export default function Header() {
    const navigate = useNavigate();
    return (
        <nav className="bg-neutral-cwprimary w-full z-20 top-0 start-0 border-default">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-[#d2773b] md:mt-2 md:rounded-md">
                <a className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" onClick={() => navigate("/")}>
                    <img
                        src={Logo}
                        className="h-7"
                        alt="NTF Movies Logo"
                    />
                    <span className="self-center text-xl text-heading text-white font-semibold whitespace-nowrap">
                        NTF Movies
                    </span>
                </a>
                <div className="block w-auto" id="navbar-dropdown">
                    <ul className="flex flex-row font-medium rounded-md space-x-8 rtl:space-x-reverse bg-neutral-primary">
                        <li>
                            <a
                                className="block py-2 leading-normal cursor-pointer px-3 rounded bg-gray-100 hover:bg-gray-200 text-black flex gap-1 items-center text-sm"
                                onClick={() => navigate("/movies")}
                            >
                                All Movies <ArrowUpRight size={18} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
