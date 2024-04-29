import { useParams } from "react-router-dom"
import Navbar from "../components/Headers/Navbar"
import { useMovieContext } from "../context/MovieContext"

export default function MoviePage() {
    const params = useParams()
    const {movie} =  useMovieContext()
   console.log(movie);
    return(
        <div className="w-full flex flex-col  ">
            <Navbar />
           <div className="w-full flex flex-col justify-center items-center">
           
            <h2 className="text-3xl text-purple-500 font-bold relative cursor-pointer">
            <span className="text-gray-100">Title:</span> {movie.movietitle}
            </h2>
            <div className="w-full  mt-4 gap-10  flex  flex-col justify-center  items-center  ">
            <img className="mt-10 " src={movie.moviemainphotos[0]} alt="" />
            <div className="flex items-center p-2 rounded-xl text-White gap-3 "> {movie.moviegenres.map(lang=>{
                return <span className=" bg-purple-500 hover:bg-purple-700 px-2 py-1 rounded-lg text-lg cursor-pointer">{lang}</span>
            })}</div>
            <div className="flex items-center flex-wrap items-center p-2 rounded-xl text-black gap-3"><span className=" text-slate-100 text-xl font-semibold">Languages:</span> {movie.movielanguages.map(lang=>{
                return <span className=" bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-lg text-sm font-bold cursor-pointer">{lang}</span>
            })}</div>
            
             <div className="flex items-center  flex-wrap items-center p-2 rounded-xl text-black gap-3"><span className=" text-slate-100 text-xl font-semibold">Coutries:</span> {movie.moviecountries
.map(lang=>{
                return <span className=" bg-blue-500 hover:bg-blue-700 bg- px-2 py-1 rounded-lg text-sm font-bold cursor-pointer">{lang}</span>
            })}</div>
            </div>
           </div>
        </div>
    )
};
