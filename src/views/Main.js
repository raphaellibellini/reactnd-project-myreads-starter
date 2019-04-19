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
            // console.log(books)
            this.setState(() => ({
              books
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
                    <Shelf title='Currently Reading' />
                    <Shelf title='Want to Read' />
                    <Shelf title='Read' />
                </div>
                <Button />
            </div>
        )
    }
}

export default Main