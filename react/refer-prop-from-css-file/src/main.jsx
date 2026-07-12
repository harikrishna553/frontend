import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BoxComponent from './components/BoxComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BoxComponent />
  </StrictMode>,
)
