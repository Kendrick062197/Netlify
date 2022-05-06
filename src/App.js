import React from "react";
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/Home';
import Page404 from '../src/components/404Page/NotFoundPage';
import Dashboard from '../src/components/Dashboard/Dashboard';
import "./App.css";
import { BrowserRouter as Router, Route, Routes,Switch } from "react-router-dom";



function App() {
  
  function setToken(userToken) {
      sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/Netlify/" exact element={<Home/>} />
            <Route path="/Netlify/Login" exact element={<Login setToken={setToken}/>}/>
            <Route path="/Netlify/Dashboard" exact element={<Dashboard setToken={setToken}/>} />
            <Route path="/*" element={<Page404 />} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;