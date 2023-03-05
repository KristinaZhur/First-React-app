import React from 'react'
//import ReactDOM from 'react-dom'
//import Header from '.src/header'

import ReactDOM from 'react-dom/client'; 

function Page () {
    return (
        <div>
            <h1>hjgj</h1>
        </div>
    )
}

//ReactDOM.render (<Page />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render(<Page />);
