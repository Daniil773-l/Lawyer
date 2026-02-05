import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
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
