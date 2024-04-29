import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MovieContext = createContext()

const MovieProvider = ({children})=>{
 const [input,setInput] = useState(null)
 const [movie,setMovie] = useState(null)
    
    return(
        <MovieContext.Provider value={{input,setInput,movie,setMovie}} >
            {children}
        </MovieContext.Provider>
    )
}

const useMovieContext = ()=>{
   return  useContext(MovieContext)
}

export {MovieProvider,useMovieContext}