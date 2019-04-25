import React from 'react'
import Book from './Book'

function Shelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.booksOnTheShelf.map(book => <Book book={book} key={book.id} changeShelf={props.changeShelf} />)}
                </ol>
            </div>
        </div>
    )
}

export default Shelf