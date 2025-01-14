import MovieList from "../movie-list";
import { useEffect, useState } from "react"
import axios from "axios"
import { OMDB_API_KEY } from "@/constants"

export default function Home() {

    const [movies, setMovies] = useState<any>([])

    useEffect(() => {
        try {
            axios.get(`https://www.omdbapi.com/?&apikey=${OMDB_API_KEY}&s=Movie&page=1`)
                .then(res => {
                    if (!!res.data.Search) {
                        setMovies(res.data.Search)
                    }
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
