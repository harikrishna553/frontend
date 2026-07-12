import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Define a component called 'HelloWorld'
function HelloWorld() {
  return <h1>Building UI Applications using React is Fun...........</h1>; // JSX to return an h1 element
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>,
)
