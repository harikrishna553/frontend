import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EmployeeDetails from './components/EmployeeDetails'
import EmployeeDetailsUsingForLoop from './components/EmployeeDetailsUsingForLoop'
import EmployeeDetailsForEachLoop from './components/EmployeeDetailsUsingForEachLoop'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeDetails />
    <EmployeeDetailsUsingForLoop />
    <EmployeeDetailsForEachLoop />
  </StrictMode>,
)
