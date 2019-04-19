import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './views/Search'
import Main from './views/Main'
import {Route} from 'react-router-dom' 

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Main} />
        <Route exact path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp