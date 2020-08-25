import React from 'react';
import './App.css';

//components
import Login from './components/login'
import Currency from "./components/Currency"
//routes
import {BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  return (
   <div>
     <Router>
     <Route exact path="/">
     <Login/>
      </Route>
     <Route path="/currency">
        <Currency  />
      </Route>
     </Router>
   </div>
  );
}

export default App;
