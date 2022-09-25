import { Link } from "react-router-dom";

export function Links(){
    return(
        <>
        <Link to={"/login/"}>
     <button> LogIn </button>
     </Link>
     <Link to={"/signin/"}>
     <button> SignUp </button>
     </Link>
        </>
    )
}