import React from "react";
import { Routes, Route } from 'react-router';
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/Home';
import Page404 from '../src/components/404Page/NotFoundPage';
import Dashboard from '../src/components/Dashboard/Dashboard';
import "./App.css";
import { BrowserRouter } from "react-router-dom";



function App() {
  
  function setToken(userToken) {
      sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/Netlify/" exact element={<Home/>} />
          <Route path="/Netlify/Login" exact element={<Login setToken={setToken}/>}/>
          <Route path="/Netlify/Dashboard" exact element={<Dashboard setToken={setToken}/>} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;