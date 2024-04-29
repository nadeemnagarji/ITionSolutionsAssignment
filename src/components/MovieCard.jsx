import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";



export default function MovieCard({data}) {
   const {setMovie} =  useMovieContext()
    return (
        <Link to={`/movie/${data.movietitle}`} onClick={()=>setMovie(data)}>
        <div className="flex  flex-col rounded-xl overflow-hidden max-smallPhone:w-[300px]  w-[350px] bg-gray-200 h-fit shadow-lg   rounded-lg items-start gap-2 hover:cursor-pointer  hover:border-[2px]  hover:border-purple-900 transition duration-300">
       <div
       
       style={
        { 
        backgroundImage: `url('${data.moviemainphotos[0]}')`, 
        
        }}
       className={`w-full h-1/3 flex justify-center rounded-2xl rounded-tl-none rounded-tr-none  bg-cover bg-center`} >
        <img src={data.moviemainphotos} alt="user-image" className="  z-10  " />
       </div> 

            <div className=" w-full bg-white p-2 flex flex-col justify-between items-start font-semibold gap-1">
                <div>
                    
                </div>
                <p className="text-bvxl text-grey-800 text-gray-900 mb-4"> {data.movietitle}</p>
                
               <div className="flex justify-between items-center w-full text-gray-800" > 
               <p className="text-sm text-gray-800"> {data.movielanguages[0] } </p>
               <p className="text-sm text-gray-800"> { data.movielanguages[0] ==="Hindi" || data.movielanguages[0] ==="Tamil" || data.movielanguages[0] ==="Malayalam" || data.movielanguages[0] ==="Kannada" || data.movielanguages[0] ==="Telugu"  ?"India" : data.moviecountries[0] }</p>
                
                 
                 
                 </div>
                <div className="w-full flex justify-between mt-5">
                    {data.moviegenres.map(movie=>{
                        return  <p className=" text-xs bg-purple-500 p-1 text-gray-800 rounded-md"> {movie}</p>
                    })}
                </div>
            </div>
        </div>
        </Link>
    );
};


/*

   <p className=" text-xs bg-purple-500 p-1 text-black rounded-md"> {data.moviegenres[0]}</p>

*/