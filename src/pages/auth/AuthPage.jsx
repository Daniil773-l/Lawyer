import {useState} from "react";
import {auth, db} from "../../Fireabase/config.js";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";
import {motion} from "framer-motion";
import {IMaskInput} from "react-imask";
import {useNavigate} from "react-router-dom";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [confrimPassword, setConfrimPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            setLoading(true);
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                if (password !== confrimPassword) {
                    throw new Error("Пароли не совпадают");
                }
                if (!name || !surname || !phone) {
                    throw new Error("Заполните все поля")
                }
                const res = await createUserWithEmailAndPassword(auth, email, password);
                await setDoc(doc(db, "users", res.user.uid), {
                    name,
                    surname,
                    phone,
                    email,
                    role: "user",
                    createdAt: new Date().toISOString()
                });
            }
            navigate("/profile",{replace: true });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                className="bg-white p-8 rounded-lg shadow max-w-md w-full"
            >
                <h1 className="text-3xl font-bold text-center mb-6">
                    {isLogin ? "Вход" : "Регистрация"}
                </h1>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                placeholder="Имя"
                                className="w-full border px-4 py-2 rounded"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Фамилия"
                                className="w-full border px-4 py-2 rounded"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Пароль"
                        className="w-full border px-4 py-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Подтвердите пароль"
                            className="w-full border px-4 py-2 rounded"
                            value={confrimPassword}
                            onChange={(e) => setConfrimPassword(e.target.value)}
                        />
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        disabled={loading}
                    >
                        {loading
                        ?"Загрузка.."
                        :isLogin
                        ?"Войти"
                        :"Создать акаунт"}
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
