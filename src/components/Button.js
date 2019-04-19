import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Button extends Component {
    render() {
        return (
            <div className="open-search">
                <Link to='/search'><button>Add a Book</button></Link>
            </div>
        )
    }
}

export default Button