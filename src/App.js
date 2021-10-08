
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/header'
import './App.css';
import Services from './pages/Services/Services'
import Home from './pages/Home'
import About from './pages/About'
import Consulting from './pages/Services/Consulting'

function App() {
  return (
    <>
    <div>
    </div>
    
    <Switch>
    <Route exact path='/'>
      <Header/>
      <Home/>
   </Route>
   <Route exact path='/services'>
     <Header/>
    <Services/>
   </Route>
   <Route path='/services/consulting'>
     <Header/>
     <Services/>
    <Consulting/>
   </Route>
   <Route path='/about'>
    <About/>
   </Route>

</Switch>
</>
  );
}

export default App;
