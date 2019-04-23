import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from '../components/Book'

class Search extends Component {
    render() {
        const {foundBooks, query, updateQuery, clearQuery, changeShelf} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    {/* Go back to the main page and clear the search bar and results */}
                    <Link to='/' className="close-search" onClick={clearQuery}>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        */}
                        <input
                            type='text'
                            placeholder='Search by title or author'
                            value={query}
                            onChange={(evt) => updateQuery(evt.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {foundBooks.map(book => (
                            <Book key={book.id} book={book} changeShelf={changeShelf} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search