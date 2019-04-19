import React, {Component} from 'react'
import Shelf from '../components/Shelf'
import Button from '../components/Button'

class Main extends Component {
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