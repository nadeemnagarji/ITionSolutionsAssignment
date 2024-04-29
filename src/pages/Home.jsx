
import Navbar from "../components/Headers/Navbar"
import MovieCard from "../components/MovieCard"
import SearchComp from "../components/SearchComp"
import data from "../../movies-filter-react/movies-filter-react.json"
import { useMovieContext } from "../context/MovieContext"
import { useEffect, useState } from "react"
import Button from "../components/common/Button"
import Select from "../components/common/Select"

const Language =  [
    "Hindi",
    "Malayalam",
    "Portuguese",
    "Tamil",
    "Kannada",
    "Korean",
    "Turkish",
    "Spanish",
    "Telugu",
    "English"
]
const country =  [
    "Ireland",
    "Israel",
    "Mexico",
    "United Arab Emirates",
    "Australia",
    "Canada",
    "Germany",
    "Egypt",
    "Finland",
    "France",
    "United Kingdom",
    "Indonesia",
    "India",
    "Netherlands",
    "Sweden",
    "Singapore",
    "Thailand",
    "United States",
    "South Africa",
    "Portugal",
    "Japan"
]
const genre = [
    "Action",
    "Drama",
    "Documentary",
    "Sport",
    "Fantasy",
    "Animation",
    "Horror",
    "Thriller",
    "Adventure",
    "Comedy",
    "Biography"
]

export default function Home(params) {

    const {input,setInput} =  useMovieContext()
    const [MovieData,setMovieData] = useState(data)
    const [filterCountry,setFilterCountry] = useState(null)
    const [filterGenre,setFilterGenre] = useState(null)
    const [filterLang,setFilterLang] = useState(null)


    const handleGenre = (e)=>{
        const newMovieData =  data.filter(Movie=> Movie.moviegenres.includes(e.target.value)) 
        console.log(newMovieData);
        setMovieData(newMovieData)
    }
    const handleLang = (e)=>{
        const newMovieData =  data.filter(Movie=> Movie.movielanguages.includes(e.target.value)) 
        console.log(newMovieData);
        setMovieData(newMovieData)
    }
    const handleCountry= (e)=>{
        const newMovieData =  data.filter(Movie=> Movie.moviecountries.includes(e.target.value)) 
        console.log(newMovieData);
        setMovieData(newMovieData)
    }

useEffect(()=>{
        const Input = input &&  input.trim()  
        console.log(MovieData);
        const newMovieData = Input ? data.filter(Movie=> Movie.movietitle.includes(Input)) : data
        setMovieData(newMovieData)
    
   
},[input])
    return(
        <div className="w-full flex flex-col  ">
            <Navbar />
            <SearchComp />
            <div className="w-full flex justify-center gap-5 px-5  m-auto  mt-5  flex-wrap ">
            <Select  options={genre} onChange={handleGenre} className="w-[150px]" />
            <Select  options={Language}  onChange={handleLang} className="w-[150px]" />
            <Select options={country}   onChange={handleCountry} className="w-[150px]" />
            </div>
            <div className="w-full  px-8 mt-10 flex  flex-wrap gap-10 items-center justify-center">
            {MovieData.map(item=>{
                return <MovieCard key={item.imdbmovieid} data={item} />
            })}
            </div>
        </div>
    )
};
