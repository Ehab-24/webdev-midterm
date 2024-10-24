import MovieList from "../movie-list";

export default function Home() {

    return (
        <div className="flex flex-col px-4 md:px-20 py-20">
            <h2 className="mb-10 mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Top Movies
            </h2>

            <MovieList />
        </div>
    )
}
