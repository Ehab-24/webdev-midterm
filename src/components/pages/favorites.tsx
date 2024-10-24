import MovieList from "../movie-list";
import { useEffect, useState } from "react"
import axios from "axios"
import { FAVORITES_KEY, OMDB_API_KEY } from "@/constants"
import { getArray } from "@/lib/utils";

export default function Favorites() {

    const [movies, setMovies] = useState<any>([])

    useEffect(() => {
        try {
            const favs = getArray(FAVORITES_KEY)
            let promises = favs.map(fav => {
                return axios.get(`https://www.omdbapi.com/?&apikey=${OMDB_API_KEY}&i=${fav}`)
            })
            Promise.all(promises).then(res => {
                console.log(res)
                let ms = res.map(r => r.data)
                setMovies(ms)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <div className="flex flex-col px-4 md:px-20 py-20">
            <h2 className="mb-10 mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Top Movies
            </h2>

            <MovieList movies={movies} />
        </div>
    )
}
