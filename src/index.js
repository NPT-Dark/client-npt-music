import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/home"
import "./globalStyle.scss"
import { BrowserRouter as Router, Routes,Route,Navigate} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<Navigate to="/song/default" replace={true} />}/>
        <Route path='/song/:id' element = {<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
