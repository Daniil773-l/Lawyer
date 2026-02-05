import Hero from "../../componets/Hero.jsx";
import ServicesPreview from "../../componets/ServicesPreview.jsx";
import AboutPreview from "../../componets/AboutPreview.jsx";
import ContactCTA from "../../componets/ContactCTA.jsx";

export default function Home() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero />
            <ServicesPreview />
            <AboutPreview />
            <ContactCTA />
        </div>
    );
}