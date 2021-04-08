import React from 'react'
// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Store from './components/pages/Store'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
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
