import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/layout"
import Home from "./components/pages/home"
import ThemeProvider from "./components/theme-provider";
import Movie from "./components/pages/movie";
import Favorites from "./components/pages/favorites";

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie" element={<Movie />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App
