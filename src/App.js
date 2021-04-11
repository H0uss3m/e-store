import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Store from './components/pages/Store'
import Nav from './components/Nav'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/boutique'>
            <Store />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
