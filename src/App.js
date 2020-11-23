import React from 'react'
import './App.css'
import Search from './views/Search'
import Main from './views/Main'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class App extends React.Component {
  state = {
    books: [],
    foundBooks: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((resp) => {
        // console.log(resp)
        this.setState({
          books: resp
        })
      })
  }

  /* The selected book will receive the selected status.
   * If it is not already on a shelf,
   * it is added to the shelf of its attribute 
   */
  changeShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf)
        .then(resp => {
            // console.log(resp)
            updatedBook.shelf = shelf;
            this.setState(prevState => ({
                books: prevState.books.filter(book => updatedBook.id !== book.id).concat([updatedBook])
            }))
        })
  }

  /* The 'input' receives the characters that the user entered
   * and invokes the 'search' method passing the searched term 
   */
  updateQuery = (query) => {
		this.setState ({query})
    this.searchBooks(query)
  }

  // Clears the 'input' and the books found.
  clearQuery = () => {
    this.setState({
      query: '',
      foundBooks: []
    })
  }
  
  
  /* Search the books according to the 'input'.
   * If there is an error in the response, no book will be shown 
   */
  searchBooks = (query) => {
    if(query) {
      BooksAPI.search(query)
        .then(resp => {
          if(resp.error) {
            this.setState({foundBooks: []})
          } else {
            /* It will check if a response book is on some shelf,
             * if yes it will set the shelf value in the answer book.
             * This is repeated until you check all the books in the answer 
             */
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

export default App;