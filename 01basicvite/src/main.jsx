import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to Visit Google'
}

function MyApp() {
    return (
        <div>
            <h1> Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>
        Visit Google
    </a>
)

const areactElement = React.createElement(
    'a', // element
    {href: 'https://google.com', target: '_blank'}, // attribute
    'click me to Visit Google' // children
    // the order should remain the same
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    areactElement
)
