import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Heart, HeartHandshake } from "lucide-react"
import { getArray, storeArray } from "@/lib/utils"
import { FAVORITES_KEY } from "@/constants"
import { useEffect, useState } from "react"

export default function MovieCard({ movie }: { movie: any }) {

    function addToFavorites() {
        if (favorites.includes(movie.imdbID)) {
            const favs = favorites.filter(f => f != movie.imdbID)
            storeArray(FAVORITES_KEY, favs)
            setFavorites(favs)
            console.log("set favs to: ", favs)
        } else {
            const favs = [...favorites, movie.imdbID]
            storeArray(FAVORITES_KEY, favs)
            setFavorites(favs)
            console.log("set favs to: ", favs)
        }
    }

    const [favorites, setFavorites] = useState<string[]>([])

    useEffect(() => {
        const favs = getArray(FAVORITES_KEY)
        setFavorites(favs)
    }, [])

    return (
        <div className="w-full h-max rounded-lg shadow-2xl shadow-black/10 flex flex-col overflow-hidden">

            <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full aspect-[5/3] object-cover"
            />

            <div className="flex justify-between w-full px-4 mt-6">
                <div className="flex flex-col">
                    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                        {movie.Title}
                    </h3>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                </div>

                <div className="flex items-center h-min gap-1 min-w-max">
                    <button onClick={() => addToFavorites()}>
                        {
                            favorites.includes(movie.imdbID) ? (
                                <HeartHandshake />
                            ) : (
                                <Heart />
                            )
                        }
                    </button>
                </div>
            </div>

            <div className="flex items-center w-full justify-between my-6 px-4">
                <p className="leading-7">
                    <span className="text-sm leading-relaxed tracking-wide">Year </span>
                    {movie.Year}
                </p>

                <Button asChild>
                    <Link to={`/movie/?i=${movie.imdbID}`}>
                        Details
                    </Link>
                </Button>
            </div>

        </div>
    )
}
