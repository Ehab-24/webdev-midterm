import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from "axios"
import { OMDB_API_KEY } from "./constants"
import Layout from "./components/layouts/layout"
import Home from "./components/pages/home"

function App() {


    useEffect(() => {
        try {
            axios.get(`https://www.omdbapi.com/?&apikey=${OMDB_API_KEY}&s=Movie&page=1`)
                .then(res => {
                    console.log("OMDB response:", res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
