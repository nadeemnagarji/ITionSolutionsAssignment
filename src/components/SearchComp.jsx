import { useRef, useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import { useMovieContext } from "../context/MovieContext";



export default function SearchComp() {
    const [searchInput, setSearchInput] = useState(null)
    const InputRef = useRef()
    const {input,setInput} =  useMovieContext()

    const handleSubmit = ()=>{
      //  console.log(InputRef.current.value);
      setSearchInput(InputRef.current.value)
      setInput(InputRef.current.value)
      
    }

    const handleOnChange = ()=>{
    //    console.log(InputRef.current.value);
        setSearchInput(InputRef.current.value)
        setInput(InputRef.current.value)
    }
   return(
    <div className="w-full items-center justify-center flex gap-10  px-5 mt-4">
    <Input ref={InputRef}  className="w-2/3" placeholder="Search Movies" onChange={handleOnChange}/>
    <Button children="Search" onClick={handleSubmit}   className="w-32 bg-red-500"/>
    </div>
   )
};
