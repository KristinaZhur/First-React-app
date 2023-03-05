import React from 'react'
//import ReactDOM from 'react-dom'
import Header from './src/header'
import ReactDOM from 'react-dom/client'; 
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

function Page () {
    return (
        <div>
            <h1>hjgj</h1>
        </div>
    )
}

//ReactDOM.render (<Page />, document.getElementById('root'))
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
