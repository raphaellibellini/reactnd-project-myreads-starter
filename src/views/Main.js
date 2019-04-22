import React, {Component} from 'react'
import Shelf from '../components/Shelf'
import Button from '../components/Button'
import * as BooksAPI from '../BooksAPI'

class Main extends Component {
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

    render(){
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf title='Currently Reading' booksOnTheShelf={this.state.books.filter(book => book.shelf === "currentlyReading")} changeShelf={this.changeShelf} />
                    <Shelf title='Want to Read' booksOnTheShelf={this.state.books.filter(book => book.shelf === "wantToRead")} changeShelf={this.changeShelf} />
                    <Shelf title='Read' booksOnTheShelf={this.state.books.filter(book => book.shelf === "read")} changeShelf={this.changeShelf} />
                </div>
                <Button />
            </div>
        )
    }
}

export default Main