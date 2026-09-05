import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Fellowship from './pages/Fellowship'
import Corporate from './pages/Corporate'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/fellowship" element={<Fellowship />} />
        <Route path="/corporate" element={<Corporate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
