import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>

            <h2>PageNotFound</h2>

            <Link to={'/'}><p className='text-blue-500'>Go Home</p></Link>

        </div>
    )
}

export default PageNotFound