import { motion } from "framer-motion";
import {useLocation} from "react-router-dom";
import {useState,useEffect} from "react";
import {auth,db} from "../../Fireabase/config.js";
import {collection,addDoc,  query,where,getDocs} from "firebase/firestore";
export default function Contacts() {
    const location = useLocation();
    const [topic,setTopic] = useState("");
    const [price,setPrice] = useState("");

    useEffect(()=>{
        if(location.state){
            setTopic(location.state.topic||" ");
            setPrice(location.state.price ||" ");
        }
    },[location.state])
    console.log(
        topic,
        price
    )

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* ЛЕВАЯ ЧАСТЬ — КОНТАКТЫ */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold mb-6">Контакты</h1>

                    <p className="text-gray-700 mb-6">
                        Свяжитесь с нами любым удобным способом или оставьте заявку —
                        мы ответим в ближайшее время.
                    </p>

                    <div className="space-y-4 text-gray-800">
                        <p><strong>📍 Адрес:</strong> г. Алматы, ул. Абая 10</p>
                        <p><strong>📞 Телефон:</strong> +7 (777) 123-45-67</p>
                        <p><strong>✉️ Email:</strong> info@lawportal.kz</p>
                    </div>
                </motion.div>

                {/* ПРАВАЯ ЧАСТЬ — ФОРМА */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-lg shadow"
                >
                    <h2 className="text-2xl font-semibold mb-6">
                        Оставить заявку
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            className="w-full border px-4 py-2 rounded"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border px-4 py-2 rounded"
                            required
                        />

                        <input
                            type="tel"
                            placeholder="Телефон"
                            className="w-full border px-4 py-2 rounded"
                        />
                        <input  type="text"
                                placeholder="Тема заявки"
                                value={topic}
                                onChange={(e)=>setTopic(e.target.value)}

                                className="w-full border px-4 py-2 rounded" required/>
                        <input
                            type="number"
                            placeholder="Cтоимость (Т)"
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
                            required
                            className={"w-full border px-4 py-2 rounded" }
                        />
                        <textarea
                            placeholder="Опишите вашу проблему"
                            className="w-full border px-4 py-2 rounded h-32 resize-none"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            Отправить заявку
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
