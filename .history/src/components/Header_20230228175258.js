import React from 'react'

export default function Header () {
    return (
        <div>
        <header>
            <nav>
               
                <img src = './Rectangle 90.jpg' alt = 'face' />

                <h1 className = 'nav--h1'>Laura Smith</h1>
                <h4>Frontend Developer</h4>
                    <p>laurasmith.website</p>
            </nav>
                <div class = 'nav--buttons'>
                    <button className = 'nav--email'><img src = 'Icon.png' />Email</button>
                    <button className = 'nav--linkedin'><img src = 'Vector.png' />LinkedIn</button>
                </div>
        </header>
        </div>
    )
}