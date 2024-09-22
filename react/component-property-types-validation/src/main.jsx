import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserDetails from './components/UserDetails'

const userDetails = {
  "username" : "Chamundeswari",
  "email" : "chamu@example.com",
  "hobbies" : [
    "Trekking",
    "Cooking"
  ]
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDetails {... userDetails}/>
  </StrictMode>,
)
