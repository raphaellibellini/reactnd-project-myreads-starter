import React, {Component} from 'react'
import Shelf from '../components/Shelf'
import Button from '../components/Button'

class Main extends Component {
    render(){
        const {books, changeShelf} = this.props

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf title='Currently Reading' booksOnTheShelf={books.filter(book => book.shelf === "currentlyReading")} changeShelf={changeShelf} />
                    <Shelf title='Want to Read' booksOnTheShelf={books.filter(book => book.shelf === "wantToRead")} changeShelf={changeShelf} />
                    <Shelf title='Read' booksOnTheShelf={books.filter(book => book.shelf === "read")} changeShelf={changeShelf} />
                </div>
                <Button />
            </div>
        )
    }
}

export default Main