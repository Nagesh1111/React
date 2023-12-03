import React from 'react'
import ReactDOM from 'react-dom'


const root = ReactDOM.createRoot(document.getElementById("root"));
function Heading()
{
    return(<h1>This is Heading </h1>)
}

root.render(<Heading/>)