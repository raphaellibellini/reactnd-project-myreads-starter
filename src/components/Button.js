import React from 'react'
import {Link} from 'react-router-dom'

function Button() {
    return (
        <div className="open-search">
            <Link to='/search'><button>Add a Book</button></Link>
        </div>
    )
}

export default Button