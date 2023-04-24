import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import Episodes from './pages/Episodes/Episodes'
import About from './pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/' element={<Episodes />} /> 
     </Routes>

     

     <Footer />

    </BrowserRouter>
  )
}

export default App
