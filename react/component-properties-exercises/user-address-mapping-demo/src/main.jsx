import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UsersInfo from './components/UsersInfo'

const users = [
  {
    id : 1,
    name : "Krishna",
    age : 36,
    city : "Banaglore",
    state : "Karnataka",
    country : "India"
  },
  {
    id : 2,
    name : "Ram",
    age : 39,
    city : "Hyderabad",
    state : "Andhra Pradesh",
    country : "India"
  }
]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersInfo users={users}/>
  </StrictMode>,
)
