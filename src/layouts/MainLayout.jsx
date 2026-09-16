import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

const MainLayout = () => {
    return <><div className="flex flex-col min-h-screen justify-center items-center">
            <Header />
            <Outlet />
        </div>

        <Footer /></>
}
export default MainLayout
