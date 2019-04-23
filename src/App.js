import React from 'react'
import './App.css'
import Search from './views/Search'
import Main from './views/Main'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    foundBooks: [],
    query: ''
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

  updateQuery = (query) => {
		this.setState ({query: query}, )
    this.searchBooks(query)
  }

  clearQuery = () => {
    this.setState({
      query: '',
      foundBooks: []
    })
  }
  
  searchBooks = (query) => {
    if(query) {
      BooksAPI.search(query)
        .then(resp => {
          if(resp.error) {
            this.setState({foundBooks: []})
          } else {
            this.setState({foundBooks: resp})
          }
        })
    } else {
      this.setState({foundBooks: []})
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Main books={this.state.books} changeShelf={this.changeShelf} />
        )} />
        <Route exact path='/search' render={() => (
          <Search foundBooks={this.state.foundBooks} query={this.state.query} 
            updateQuery={this.updateQuery} clearQuery={this.clearQuery} changeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp