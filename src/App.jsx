import './App.css'
import Home from './Components/Home'
import NavigationBar from './Components/NavigationBar'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Certifications from './Components/Certifications'
import MiniProjects from './Components/Miniprojects'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />  
      <Home />
      <Projects />
      <MiniProjects />
      <Certifications />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
