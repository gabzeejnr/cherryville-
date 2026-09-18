import { Outlet } from "react-router-dom";
import SiteNavBar from "../components/SiteNavBar";
import CherryVilleFooter from "../components/CherryVilleFooter";

export default function MainLayout() {
    return (
        <main>
            <SiteNavBar />
            <Outlet />
            <CherryVilleFooter />
        </main>
    )
}