import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Skill from './sections/Skill.jsx'
import Services from './sections/Services.jsx'
import Project from './sections/Project.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <About />
    <Skill />
    <Services />
    <Project />
    <Footer />
  </StrictMode>,
)