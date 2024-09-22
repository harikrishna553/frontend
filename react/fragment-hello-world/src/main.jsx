import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserDetailsWithFragment, UserDetailsWithoutFragments } from './components/UserDetailComponents'

import './css/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDetailsWithFragment />
    <UserDetailsWithoutFragments />
  </StrictMode>,
)
