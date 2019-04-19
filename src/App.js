import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/Shelf'
import Button from './components/Button'
import Search from './Search'
import {Route} from 'react-router-dom' 

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf />
            </div>
            <Button />
          </div>
        )} />
        <Route exact path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
