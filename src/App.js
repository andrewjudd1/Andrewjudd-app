
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/header'
import './App.css';

function App() {
  return (
    <>
    <div>
      <p> hello </p>
    <Header/>
    </div>
    
    <Switch>
    <Route path='/'>
      <Header/>
    </Route>
</Switch>
</>
  );
}

export default App;
