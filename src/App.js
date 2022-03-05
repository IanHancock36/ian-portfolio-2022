import React from 'react'
import Home from "./Components/Home"
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'
import About from './Components/About'
import  {HashRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <HashRouter>
      <Navbar></Navbar>
<div>
  <Switch>
    <Route exact path ="/" component={Home}/>
    <Route path="/contact"  component={Contact}/>
    <Route path="/about"  component={About}/>
  </Switch>
</div>
        </HashRouter>
      

    </div>
  );
}

export default App;
