import React from 'react';
import './App.css';

//components
import Login from './components/login'
import Aadhar from "./components/aadhar"
//routes
import {BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  return (
   <div>
     <Router>
     <Route exact path="/">
     <Login/>
      </Route>
     <Route path="/aadhar">
        <Aadhar  />
      </Route>
     </Router>
   </div>
  );
}

export default App;
