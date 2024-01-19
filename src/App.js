import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home/Home";

function App() {
  return <BrowserRouter>
    <Routes> 
      <Route element={<Home/>} path='/'/>

      <Route element={<Home/>} path='/company'/>

      <Route element={<Home/>} path='/works'/>

      <Route element={<Home/>} path='/contacts'/>
      
      <Route element={<div>Not found</div>} path='*'/>
    </Routes>
  </BrowserRouter>
}

export default App;
