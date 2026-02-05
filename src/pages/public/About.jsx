import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Заголовок */}
                <h1 className="text-4xl font-bold text-center mb-10">
                    О компании
                </h1>

                {/* Описание */}
                <div className="bg-white p-8 rounded-lg shadow mb-12">
                    <p className="text-gray-700 mb-4">
                        LawPortal — это команда профессиональных юристов, оказывающих
                        квалифицированную юридическую помощь физическим и юридическим лицам.
                    </p>

                    <p className="text-gray-700 mb-4">
                        Мы работаем в сфере гражданского, административного и
                        предпринимательского права, помогая клиентам решать сложные
                        юридические вопросы быстро и эффективно.
                    </p>

                    <p className="text-gray-700">
                        Наша цель — защитить ваши права и интересы законным и прозрачным
                        способом.
                    </p>
                </div>

                {/* Преимущества */}
                <h2 className="text-3xl font-semibold text-center mb-8">
                    Почему выбирают нас
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded shadow text-center">
                        <h3 className="text-xl font-bold mb-2">Опыт</h3>
                        <p className="text-gray-600">
                            Более 10 лет юридической практики
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow text-center">
                        <h3 className="text-xl font-bold mb-2">Надёжность</h3>
                        <p className="text-gray-600">
                            Работаем строго в рамках закона
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow text-center">
                        <h3 className="text-xl font-bold mb-2">Результат</h3>
                        <p className="text-gray-600">
                            Реальные решения и довольные клиенты
                        </p>
                    </div>
                </div>

                {/* Цифры */}
                <motion.div
                    className="bg-blue-600 text-white rounded-lg p-8 grid md:grid-cols-3 text-center gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.08 }}
                    >
                        <p className="text-4xl font-bold">10+</p>
                        <p className="mt-2">лет опыта</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.08 }}
                    >
                        <p className="text-4xl font-bold">500+</p>
                        <p className="mt-2">успешных дел</p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.08 }}
                    >
                        <p className="text-4xl font-bold">1000+</p>
                        <p className="mt-2">клиентов</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
