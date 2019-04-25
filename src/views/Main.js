import React from 'react'
import Shelf from '../components/Shelf'
import Button from '../components/Button'

function Main(props) {
    const {books, changeShelf} = props

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {/* Shows the books according to the shelves to which they belong */}
            <div className="list-books-content">
                <Shelf title='Currently Reading' booksOnTheShelf={books.filter(book => book.shelf === "currentlyReading")} changeShelf={changeShelf} />
                <Shelf title='Want to Read' booksOnTheShelf={books.filter(book => book.shelf === "wantToRead")} changeShelf={changeShelf} />
                <Shelf title='Read' booksOnTheShelf={books.filter(book => book.shelf === "read")} changeShelf={changeShelf} />
            </div>
            <Button />
        </div>
    )
}

export default Main