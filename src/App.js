import React from "react";
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/Home';
import Page404 from '../src/components/404Page/NotFoundPage';
import Dashboard from '../src/components/Dashboard/Dashboard';
import "./App.css";
import { HashRouter  as Router, Route, Routes } from "react-router-dom";



function App() {
  
  function setToken(userToken) {
      sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/Login" exact element={<Login setToken={setToken}/>}/>
            <Route path="/Dashboard" exact element={<Dashboard setToken={setToken}/>} />
            <Route path="/*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;