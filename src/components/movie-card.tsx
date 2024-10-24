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
                    <h3 className="text-xl font-medium text-gray-900 leading-relaxed">
                        {movie.Title}
                    </h3>
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed tracking-wide">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                    <p className="text-sm text-gray-500 leading-relaxed tracking-wide">Language</p>
                </div>

                <div className="flex items-center h-min gap-1 min-w-max">
                    <img
                        src="../../public/star.svg"
                        alt="star"
                        className="w-4 h-4"
                    />
                    <p className="font-medium text-gray-900">5.0</p>
                </div>
            </div>

            <div className="flex items-center w-full justify-between my-6 px-4">
                <p className="text-xl font-medium text-gray-900">
                    <span className="text-sm text-gray-500 leading-relaxed tracking-wide">Year </span>
                    {movie.Year}
                </p>

                <Button>
                    Book Now
                </Button>
            </div>

        </div>
    )
}
