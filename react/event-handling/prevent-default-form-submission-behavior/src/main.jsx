import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SubmitComment from './components/SubmitComment'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SubmitComment />
  </StrictMode>,
)
