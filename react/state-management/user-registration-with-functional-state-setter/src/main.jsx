import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserRegistration from './components/UserRegistration'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserRegistration />
  </StrictMode>,
)
