import Logo from "../assets/logo.png";
export default function Header() {
    return (
        <nav className="bg-neutral-primary w-full z-20 top-0 start-0 border-default">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src={Logo}
                className="h-7"
                alt="KMF Movie Logo"
              />
              <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                KMF Movie
              </span>
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
               </ul>
            </div>
          </div>
        </nav>
    )
}
