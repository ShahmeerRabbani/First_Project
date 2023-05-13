import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Head from "../head/Head";
import Left from "../leftside/Left";
import Middle from "../Middle/Middle";
import Right from "../rightside/Right";



function Link(){

    useEffect(()=>{
        handleCheckUser()
    }, [])

    const navigate = useNavigate()

    const handleCheckUser = () => {
        const user = localStorage.getItem("user")
        if(!user){
            navigate('/', {replace: true})
        }
    }

    return(
        <>
           <div className="body">
            <Head/>
        <div className="main-body">
            <Right/>
            <Middle/>
            <Left/>
        </div>
    </div>
        </>
    )
}
export default Link;