import Hero from "../../componets/Hero.jsx";
import ServicesPreview from "../../componets/ServicesPreview.jsx";
import AboutPreview from "../../componets/AboutPreview.jsx";
import ContactCTA from "../../componets/ContactCTA.jsx";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        fetch("http://localhost:8000/api/hello/")
            .then(res => res.json())
            .then(data => console.log(data))
    }, []) // проверка связи между React и Django

    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero />
            <ServicesPreview />
            <AboutPreview />
            <ContactCTA />
        </div>
    );
}