import Navbar from "../navbar";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="w-full min-h-screen overflow-y-scroll flex flex-col">
            <div className="flex w-min bg-orange-200 self-center py-3 px-4 md:px-8">
                <Navbar />
            </div>

            <Outlet />
        </div>
    )
}
