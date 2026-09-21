import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Fellowship from './pages/Fellowship'
import Corporate from './pages/Corporate'
import Partnerships from './pages/Partnerships'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import './App.css'
import EnterpriseTrainng from './pages/EnterpriseTrainng'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/enterprise-training" element={<EnterpriseTrainng />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/fellowship" element={<Fellowship />} />
                    <Route path="/corporate" element={<Corporate />} />
                    <Route path="/partnerships" element={<Partnerships />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}