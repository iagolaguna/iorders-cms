import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Products from './screens/products'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/products" component={Products} />
      </Router>
    )
  }
}

export default App
