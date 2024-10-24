import Navbar from "../navbar";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="w-full min-h-screen overflow-y-scroll flex flex-col">
            <Navbar />

            <Outlet />
        </div>
    )
}
