import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

const MainLayout = () => {
    return <>

            <div className="flex flex-col">
                <Header />
            </div>
            <div className="flex flex-col min-h-screen justify-center items-center">
                <Outlet />
            </div>

            <div className="flex flex-col ">
                <Footer />
            </div>
        </>
}
export default MainLayout
