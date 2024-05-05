import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
    {/* NAVBAR */}
    <Navbar />

    {/* PAGES */}
    <Routes>

      <Route path='/' element = { <Home /> } />
      <Route path='/about' element = { <About /> } />

    </Routes>

    {/* FOOTER */}
    <Footer />

    </>
  )
}

export default App
