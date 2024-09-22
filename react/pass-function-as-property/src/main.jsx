import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserDetails from './components/UserDetails'

let userDetails = {
  username : "Krishna",
  email : "krishna@abc.com",
  info : function(){
    return `Hi, My name is ${this.username}, you can contact me at ${this.email}`;
  }
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDetails {...userDetails}/>
  </StrictMode>,
)
