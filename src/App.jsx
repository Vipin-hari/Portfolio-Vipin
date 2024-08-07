import './App.css'
import Home from './Components/Home'
import NavigationBar from './Components/NavigationBar'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Certifications from './Components/Certifications'
import MiniProjects from './Components/Miniprojects'
import { BrowserRouter } from 'react-router-dom'
import AboutSkills from './Components/AboutSkills'


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />  
      <Home />
      <AboutSkills />
      <Projects />
      <MiniProjects />
      <Certifications />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
