import { useState } from "react";
import {auth ,db} from "../../Fireabase/config.js";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {setDoc,doc} from "firebase/firestore";
import { motion } from "framer-motion";
import { IMaskInput } from "react-imask";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email,serEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name ,setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            console.log("Логин");
        } else {
            console.log("Регистрация");
            console.log("Телефон:", phone);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-lg shadow max-w-md w-full"
            >
                <h1 className="text-3xl font-bold text-center mb-6">
                    {isLogin ? "Вход" : "Регистрация"}
                </h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                placeholder="Имя"
                                className="w-full border px-4 py-2 rounded"
                            />

                            <input
                                type="text"
                                placeholder="Фамилия"
                                className="w-full border px-4 py-2 rounded"
                            />

                            <IMaskInput
                                mask="+{7} (000) 000-00-00"
                                placeholder="+7 (___) ___-__-__"
                                value={phone}
                                onAccept={(value) => setPhone(value)}
                                className="w-full border px-4 py-2 rounded"
                            />
                        </>
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border px-4 py-2 rounded"
                    />

                    <input
                        type="password"
                        placeholder="Пароль"
                        className="w-full border px-4 py-2 rounded"
                    />

                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Подтвердите пароль"
                            className="w-full border px-4 py-2 rounded"
                        />
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        {isLogin ? "Войти" : "Создать аккаунт"}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    {isLogin ? "Нет аккаунта? " : "Уже есть аккаунт? "}
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-600 hover:underline font-medium"
                    >
                        {isLogin ? "Регистрация" : "Войти"}
                    </button>
                </p>
            </motion.div>
        </div>
    );
}
