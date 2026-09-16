import { ArrowUpAz } from "lucide-react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router";
import { ArrowUpRight } from "lucide-react";


export default function Header() {
    const navigate = useNavigate();
    return (
        <nav className="bg-neutral-primary w-full z-20 top-0 start-0 border-default">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-gray-200 md:mt-2 rounded-md">
            <a className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" onClick={() => navigate("/")}>
              <img
                src={Logo}
                className="h-7"
                alt="KMF Movie Logo"
              />
              <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                KMF Movies
              </span>
            </a>
            <div className="block w-auto" id="navbar-dropdown">
              <ul className="flex flex-row font-medium rounded-md space-x-8 rtl:space-x-reverse bg-neutral-primary">
            <li>
                  <a
                    className="block py-2 leading-normal cursor-pointer px-3 rounded bg-blue-500 hover:bg-blue-700 text-white flex gap-1 items-center text-sm"
                    onClick={() => navigate("/movies") }
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
