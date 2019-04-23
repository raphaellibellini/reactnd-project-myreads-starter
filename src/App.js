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
            // Vai verificar se um livro da resposta esta em alguma prateleira,
            // se sim vai 'setar' o valor da prateleira no livro da resposta.
            // Isso se repete até verificar todos os livros da resposta.
            resp.forEach(respBook => {
              // console.log('Livro')
              // console.log(respBook)
              let bookOnTheShelf = this.state.books.filter(book => book.id === respBook.id);
              // console.log(bookOnTheShelf)
              if(bookOnTheShelf[0]) {
                respBook.shelf = bookOnTheShelf[0].shelf;
              }
            })
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