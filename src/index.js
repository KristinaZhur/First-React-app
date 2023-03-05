import React from 'react'

import ReactDOM from 'react-dom'; 


import Header from './components/Header'
import Main from "./components/Main"
import Footer from "./components/Footer"

function Page () {
    return (
        <div className = 'page--container'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render (<Page />, document.getElementById('root'))




