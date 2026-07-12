import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WelcomeMessage, WelcomeMessageUsingTernary, GreetUser} from './components/WelcomeMessage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <WelcomeMessage loggedIn={true} />
      <WelcomeMessageUsingTernary loggedIn={true} />
      <GreetUser loggedIn={true} />
  </StrictMode>,
)
