import { Link, useNavigate } from "react-router-dom"



export default function Navbar(params) {
 const navigate = useNavigate()
    const NavItems = [
        {
            name:"Home",
            slug:"/home"
        },
       
       
    ]

    return(
        <div className=" w-full flex justify-between items-center px-4 py-4 ">
            <h2 onClick={()=> navigate("/")} className=" text-2xl cursor-pointer" >MovieFlix</h2>
            <ul className="flex items-center px-4  py-4 gap-5 pr-10 cursor-pointer">
               {NavItems.map(item=> (
                 <li onClick={()=> navigate("/")} key={item.name} >{item.name}</li>
               ))}
            </ul>
        </div>
    )
};
