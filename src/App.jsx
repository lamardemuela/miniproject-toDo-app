import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
    {/* NAVBAR */}
    <Navbar />

    {/* PAGES */}
    <Routes>

      <Route path='/' element = { <Home /> } />

    </Routes>

    {/* FOOTER */}
    <Footer />

    </>
  )
}

export default App
