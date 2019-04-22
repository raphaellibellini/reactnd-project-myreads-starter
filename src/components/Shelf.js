import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.booksOnTheShelf.map(book => <Book book={book} key={book.id} changeShelf={this.props.changeShelf} />)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf