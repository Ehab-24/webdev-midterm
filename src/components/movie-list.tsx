import { useEffect, useState } from "react"
import axios from "axios"
import { OMDB_API_KEY } from "@/constants"
import MovieCard from "./movie-card"


export default function MovieList() {

    const [movies, setMovies] = useState<any>([])

    useEffect(() => {
        try {
            axios.get(`https://www.omdbapi.com/?&apikey=${OMDB_API_KEY}&s=Movie&page=1`)
                .then(res => {
                    console.log("OMDB response:", res.data)
                    if (!!res.data.Search) {
                        setMovies(res.data.Search)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-20">
            {
                movies.map((m: any) => <MovieCard movie={m} />)
            }
        </div>
    )

}
