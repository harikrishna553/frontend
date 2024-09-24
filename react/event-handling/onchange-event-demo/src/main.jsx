import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EchoTracker from './components/EchoTracker'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EchoTracker />
  </StrictMode>,
)
