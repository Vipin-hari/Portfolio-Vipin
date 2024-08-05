import './App.css'
import Home from './Components/Home'
import NavigationBar from './Components/NavigationBar'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Certifications from './Components/Certifications'
import MiniProjects from './Components/Miniprojects'


function App() {
  return (
    <>
      <NavigationBar />  
      <Home />
      <Projects />
      <MiniProjects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}

export default App
