import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import Components
import Title from './components/Title'
import Content from './components/Content'

// Import style sheet
import './css/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title />
    <Content />
  </StrictMode>,
)