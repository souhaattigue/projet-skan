import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"

function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="title">404 Not Found</h1>
            <p>Your visited page is not found. You may go Home page</p>
            <Link to="/">
                <button className="Home">Back to home page</button>
            </Link>
        </div>
    )
}
export default NotFound;