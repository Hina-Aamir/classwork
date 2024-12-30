import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import moment from 'moment'
import  About from "./pages/about"
import  Gallery from  "./pages/gallery"
import Home from "./pages/home"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  let currentDate=moment().format('LLL'); 
  console.log(currentDate)

  let [isLit,setLit] = useState(true)

  function changeTheme() {
      setLit(!isLit)
      console.log(isLit)
  }
  return (
    <>
       <div className={isLit?"light":"dark"}>
      <label>
        <input onClick={changeTheme} className="hidden" type="checkbox" />
        {isLit?<GoSun />:<FaMoon />}
      </label>
      
     <Router>
      <div>

   


        {currentDate}
        <FaSun />
        <FaMoon />
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />}>
          
          </Route>
          <Route path="/gallery" element={<Gallery />}>
      
          </Route>
          <Route path="/Home" element={<Home />}>
           
          </Route>
        </Routes>
      </div>
    </Router>
    </div>

































    </>
  )
}


export default App
