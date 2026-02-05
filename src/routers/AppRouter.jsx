import {BrowserRouter, Routes, Route} from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import {AuthProvider} from "../context/AuthContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import HomePage from "../pages/public/Home.jsx";
import Services from "../pages/public/Services.jsx";
import About from "../pages/public/About.jsx";
import AuthPage from "../pages/auth/AuthPage.jsx";
import Prices from "../pages/public/Prices.jsx";
import Contacts from "../pages/public/Contacts.jsx";
import UserDashboard from "../pages/UserPages/UserDashboard.jsx";
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route element={<PublicLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/auth" element={<AuthPage/>}/>
                    <Route path="/prices" element={<Prices/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path"/profile" element={<ProtectedRoute role="user"><UserDashboard/></ProtectedRoute>}/>
                </Route>
            </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
