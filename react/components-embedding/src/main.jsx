import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EmployeeProfile from './components/EmployeeProfile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeProfile />
  </StrictMode>,
)
