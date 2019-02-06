import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div>
        404 Not Found
        <Link to="/">
            <h1>
                Go back to Home Page
            </h1>
        </Link>
    </div>
)