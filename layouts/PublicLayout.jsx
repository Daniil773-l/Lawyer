import Navbar from "../../../untitled2/lawyer-portal/src/componets/Navbar.jsx";
import Footer from "../../../untitled2/lawyer-portal/src/componets/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
