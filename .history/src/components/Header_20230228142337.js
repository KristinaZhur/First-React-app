import React from 'react'
import ReactDOM from 'react-dom'; 
export default function Header () {
    return (
        <div>
        <header>
            <nav>
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src = 'Rectangle 90.jpg' />

                <h1>Laura Smith</h1>
                <h4>Frontend Developer</h4>
                <p>laurasmith.website</p>
            </nav>
            <button>Email</button>
            <button>LinkedIn</button>
        </header>
        </div>
    )
}