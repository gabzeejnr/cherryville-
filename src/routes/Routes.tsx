import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import EnterpriseTraining from "../pages/EnterpriseTraining";
import SectorTemplate from "../components/sectors/Sector";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Fellowship from "../pages/Fellowship";
import Corporate from "../pages/Corporate";
import Partnerships from "../pages/Partnerships";
import Insights from "../pages/Insights";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import { sectors } from "../components/sectors/data";


export default function RoutePage() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="enterprise-training" element={<EnterpriseTraining />} />
                <Route path="sectors/">
                    {sectors.map((sec, i) => {
                        const { route, heading, headingText, challenge, engage, help } = sec;

                        return (<Route path={route} element={<SectorTemplate heading={heading} headingText={headingText}
                            challenge={challenge} engage={engage} help={help} />} key={`${i}-${route}-${String(i)}`}
                        />)
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
    )
}