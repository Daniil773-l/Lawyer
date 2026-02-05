import {BrowserRouter, Routes, Route} from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

import HomePage from "../pages/public/Home.jsx";
import Services from "../pages/public/Services.jsx";
import About from "../pages/public/About.jsx";
import AuthPage from "../pages/auth/AuthPage.jsx";
import Prices from "../pages/public/Prices.jsx";
import Contacts from "../pages/public/Contacts.jsx";
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/auth" element={<AuthPage/>}/>
                    <Route path="/prices" element={<Prices/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
