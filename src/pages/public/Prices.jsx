import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const prices = [
    { title: "Консультация", price: 10000, description: "Разбор ситуации и рекомендации юриста" },
    { title: "Документы", price: 15000, description: "Подготовка договоров, заявлений, исков" },
    { title: "Суд", price: 50000, description: "Представительство в суде" },
];

export default function Prices() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Цены на услуги</h1>

                <div className="grid md:grid-cols-3 gap-8">
                    {prices.map((itemData, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-8 rounded-lg shadow text-center"
                        >
                            <h2 className="text-2xl font-semibold mb-4">{itemData.title}</h2>
                            <p className="text-4xl font-bold text-blue-600 mb-4">{itemData.price} ₸</p>
                            <p className="text-gray-600 mb-6">{itemData.description}</p>

                            <button
                                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                                onClick={() =>
                                    navigate("/contacts", {
                                        state: { topic: itemData.title, price: itemData.price }
                                    })
                                }
                            >
                                Оставить заявку
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
