import React from 'react';
import "./NotFound.css"

function NotFound(){
    return (
        <div className="not-found-container">
            <h1 className="title">404 Not Found</h1>
            <p>Your visited page is not found.You may go Home page </p>
            <button className="Home">Back to home page</button>
        </div>
        
    )
}
export default NotFound;