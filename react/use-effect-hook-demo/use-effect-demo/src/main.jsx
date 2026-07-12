import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UsersInfo from './components/UsersInfo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersInfo />
  </StrictMode>,
)
