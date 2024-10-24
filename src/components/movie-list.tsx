import MovieCard from "./movie-card"


export default function MovieList({movies}: {movies: any[]}) {

    return (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-20">
            {
                movies.map((m: any) => <MovieCard key={m.imdbID} movie={m} />)
            }
        </div>
    )

}
