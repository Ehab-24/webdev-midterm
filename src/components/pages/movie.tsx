import { OMDB_API_KEY } from "@/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Spinner from "../spinner";

export default function Movie() {

    const [searchParams, _] = useSearchParams();
    const [movie, setMovie] = useState<any>(null)

    useEffect(() => {
        try {
            const imdbID = searchParams.get('i')
            if (!imdbID) return
            axios.get(`https://www.omdbapi.com/?&apikey=${OMDB_API_KEY}&i=${imdbID}`)
                .then(res => {
                    console.log("Movie", res.data)
                    setMovie(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [searchParams])

    if (!!movie) {

        return (
            <div className="flex flex-col w-full pb-20 px-4 md:px-8 xl:px-20">

                <div className="flex flex-row gap-12">
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="w-full bg-orange-200 aspect-[2/1] object-cover rounded-xl shadow-2xl shadow-black/50"
                    />

                    <div className="flex w-full flex-col">
                        <p className="leading-7">{movie.Plot}</p>

                        <div className="flex w-full justify-between mt-4">

                            {
                                movie.Ratings.map((r: any) => (
                                    <Rating source={r.Source} value={r.Value} />
                                ))
                            }

                        </div>

                        <p className="leading-7 mt-8">
                            Released&nbsp;&nbsp;
                            <b>{movie.Released}</b>
                        </p>
                        <p className="leading-7">
                            Runtime&nbsp;&nbsp;&nbsp;&nbsp;
                            <b>{movie.Runtime}</b>
                        </p>
                        <p className="leading-7">
                            Language&nbsp;&nbsp;
                            <b>{movie.Language}</b>
                        </p>

                    </div>

                </div>

                <p className="leading-7 mt-20">
                    Director&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{movie.Director}</b>
                </p>
                <p className="leading-7">
                    Country&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{movie.Country}</b>
                </p>
                <p className="leading-7">
                    Awards&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>{movie.Awards}</b>
                </p>
                <p className="leading-7">
                    BoxOffice&nbsp;&nbsp;
                    <b>{movie.BoxOffice}</b>
                </p>


            </div>
        )
    } else {
        return (
            <div className="w-screen h-screen grid place-items-center">
                <Spinner />
            </div>
        )
    }
}


function Rating({ source, value }: { source: string, value: string }) {
    return (
        <div className="flex flex-col gap-4 items-center">
            <p className="mt-8 scroll-m-20 text-2xl font-semibold tracking-wide">{value}</p>
            <p className="leading-7">{source}</p>
        </div>
    )
}
