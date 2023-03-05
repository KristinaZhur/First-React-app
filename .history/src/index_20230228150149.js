import React from 'react'

import ReactDOM from 'react-dom'; 


import Header from './components/Header'
import Main from "./components/Main"
import Footer from "./components/Footer"

function Page () {
    return (
        <div>
            <img src = './Rectangle 90.jpg' alt = 'face' />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render (<Page />, document.getElementById('root'))




