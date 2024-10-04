import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PublishAndDisplayPost from './components/PublishAndDisplayPost'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PublishAndDisplayPost />
  </StrictMode>,
)
