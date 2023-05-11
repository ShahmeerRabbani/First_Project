import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../screen/configRequest";
import { useNavigate } from "react-router-dom";


function Firestore(){

    // const [data, setData] = useState("")
    const navigate = useNavigate()
    const handleLogOut = () =>{
        navigate('/', {replace: true})
        console.log("Log Out")
    }

    const handleAddData = async () => {


        console.log("data adding -----")

        const myCollection = collection(db, "New_Data")
        var names = document.getElementById('name').value

        const payload = {
            name: names
        }

        await addDoc(myCollection,payload);

        console.log("data added",payload)
    }

    return(
        <div>

            <h1>Create Post</h1>
            <hr></hr>
            <input type="text" placeholder="What's on your mind?"  id="name"/>
            <button onClick={handleAddData}>Post</button>
            <button onClick={handleLogOut}>Cancel</button>
        </div>
    )
}

export default Firestore;