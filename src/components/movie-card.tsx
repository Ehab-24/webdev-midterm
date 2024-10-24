import { Link } from "react-router-dom"
import { Button } from "./ui/button"

export default function MovieCard({ movie }: { movie: any }) {

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
