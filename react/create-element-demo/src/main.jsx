import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import UserProfile from './components/UserProfile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProfile />
  </StrictMode>,
)
