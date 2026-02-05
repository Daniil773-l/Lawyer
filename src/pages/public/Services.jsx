import ServiceCard from "../../componets/ServiceCard.jsx";

const services = [
    {
        title: "Юридическая консультация",
        description: "Подробный разбор вашей ситуации и рекомендации по решению",
        price: "от 10 000 ₸",
    },
    {
        title: "Составление документов",
        description: "Договоры, иски, жалобы, претензии",
        price: "от 15 000 ₸",
    },
    {
        title: "Представительство в суде",
        description: "Полное сопровождение судебного процесса",
        price: "от 50 000 ₸",
    },
    {
        title: "Регистрация бизнеса",
        description: "ИП, ТОО, консультации по налогам",
        price: "от 30 000 ₸",
    },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">
                    Юридические услуги
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
