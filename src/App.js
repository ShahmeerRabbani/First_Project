
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import {Link, Login, Signup} from './components'


export default function App() {


  return (<>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Link/>}/>
    <Route path="/signup" element={<Signup/>}/>
    </Routes>

    </>
  )
}
