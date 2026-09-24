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
import TalentSolutions from "../pages/TalentSolutions";
import Academy from "../pages/Academy/Academy";
import Beginner from "../pages/Academy/Beginner";
import Intermediate from "../pages/Academy/Intermediate";
import Advanced from "../pages/Academy/Advanced";


export default function RoutePage() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="enterprise-training" element={<EnterpriseTraining />} />
                <Route path="sectors/">
                    {sectors.map((sec, i) => {
                        const { route, heading, headingText, challenge, engage, help } = sec;

                        return (<Route path={route} element={<SectorTemplate heading={heading} headingText={headingText} route={route}
                            challenge={challenge} engage={engage} help={help} />} key={`${i}-${route}-${String(i)}`}
                        />)
                    })}
                </Route>
                <Route path="talent-solutions" element={<TalentSolutions />} />
                <Route path="academy/">
                    <Route index element={<Academy />} />
                    <Route path="beginner" element={<Beginner />} />
                    <Route path="intermediate" element={<Intermediate />} />
                    <Route path="advanced" element={<Advanced />} />
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