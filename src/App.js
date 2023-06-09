import React from 'react'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Studies from './components/Studies/Studies'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Studies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
