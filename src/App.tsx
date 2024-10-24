import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/layout"
import Home from "./components/pages/home"

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
