import { motion } from "framer-motion";

const prices = [
    {
        title: "Консультация",
        price: "10 000 ₸",
        description: "Разбор ситуации и рекомендации юриста",
    },
    {
        title: "Документы",
        price: "15 000 ₸",
        description: "Подготовка договоров, заявлений, исков",
    },
    {
        title: "Суд",
        price: "50 000 ₸",
        description: "Представительство в суде",
    },
];

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Prices() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold text-center mb-12">
                    Цены на услуги
                </h1>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {prices.map((itemData, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-8 rounded-lg shadow text-center"
                        >
                            <h2 className="text-2xl font-semibold mb-4">
                                {itemData.title}
                            </h2>

                            <p className="text-4xl font-bold text-blue-600 mb-4">
                                {itemData.price}
                            </p>

                            <p className="text-gray-600 mb-6">
                                {itemData.description}
                            </p>

                            <a
                                href="/contacts"
                                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                            >
                                Оставить заявку
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
