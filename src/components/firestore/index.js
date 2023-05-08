import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../screen/configRequest";


function Firestore(){

    const [data, setData] = useState("")

    const handleAddData = async () => {


        console.log("data adding -----")

        const myCollection = collection(db, "New_Data")
        var names = document.getElementById('name').value

        const payload = {
            name: names
        }

        await addDoc(myCollection,payload);

        console.log("data added",myCollection,payload)
    }

    return(
        <div>

            <h1>Create Post</h1>
            <hr></hr>
            <input type="text" placeholder="What's on your mind?" onChange={(e) => setData(e.target.value)} id="name"/>
            <button onClick={handleAddData}>Post</button>
        </div>
    )
}

export default Firestore;