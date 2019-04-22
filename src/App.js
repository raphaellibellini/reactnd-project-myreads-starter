import React from 'react'
import './App.css'
import Search from './views/Search'
import Main from './views/Main'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books)
        this.setState(() => ({
          books
        }))
      })
  }

  changeShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf)
        .then(resp => {
            console.log(resp)
            updatedBook.shelf = shelf;
            this.setState(prevState => ({
                books: prevState.books.filter(book => updatedBook.id !== book.id).concat([updatedBook])
            }))
        })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Main books={this.state.books} changeShelf={this.changeShelf} />
        )} />
        <Route exact path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp