import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EmployeeProfile from './components/EmployeeProfile.jsx';

const employee = {
  name: "Rama Krishan",
  position: "Software Engineer",
  email: "krishna@example.com",
  address: {
    street: "Chowdeswari Street",
    city: "Bangalore",
  },
  hobbies: ["Reading", "Cycling", "Cooking"],
  experiences: [
    "Company A: 2018 - Present (Software Engineer)",
    "Company B: 2015 - 2018 (Junior Developer)"
  ],
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeProfile {...employee}/>
  </StrictMode>,
)
