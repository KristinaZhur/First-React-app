import React from 'react'

import ReactDOM from 'react-dom'; 


import Header from './Header'

function Page () {
    return (
        <div>
            <h1>hjgj</h1>
        </div>
    )
}

ReactDOM.render (<Page />, document.getElementById('root'))


// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
