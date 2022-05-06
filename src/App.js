import React from "react";
import { Routes, Route } from 'react-router';
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/Home';
import Dashboard from '../src/components/Dashboard/Dashboard';
import "./App.css";
import { BrowserRouter } from "react-router-dom";



function App() {
  
  function setToken(userToken) {
      sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login setToken={setToken}/>}/>
          <Route path="/Dashboard" element={<Dashboard setToken={setToken}/>} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;