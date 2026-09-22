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
import EnterpriseTrainng from './pages/EnterpriseTrainng';
import SectorTemplate from './components/sectors/Sector'
import { sectors } from './components/sectors/data'
import NotFound from './pages/NotFound'
import './App.css';

export default function App() {

    const sectorsRoute = [
        { path: "oil-and-gas", data: sectors[0] },
        { path: "banking", data: sectors[1] },
        { path: "government", data: sectors[2] },
        { path: "development", data: sectors[3] }
    ]

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="enterprise-training" element={<EnterpriseTrainng />} />
                    <Route path="sectors/">
                        {sectorsRoute.map((sec, index) => {
                            const { heading, headingText, challenge, engage, help } = sec.data;
                            return <Route path={sec.path} element={<SectorTemplate
                                heading={heading} headingText={headingText} challenge={challenge}
                                engage={engage} help={help} />}
                            />
                        })}
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="programs" element={<Programs />} />
                    <Route path="fellowship" element={<Fellowship />} />
                    <Route path="corporate" element={<Corporate />} />
                    <Route path="partnerships" element={<Partnerships />} />
                    <Route path="insights" element={<Insights />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}