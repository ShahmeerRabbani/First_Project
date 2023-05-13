
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import {Firestore, Link, Login, Signup} from './components'


export default function App() {


  return (<>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Link/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/firestore" element={<Firestore/>}/>
    </Routes>

    </>
  )
}
