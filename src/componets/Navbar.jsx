import { Link } from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../Fireabase/config.js";
import {useAuth} from "../context/AuthContext.jsx";

export default function Navbar() {
    const {user,userData } = useAuth();
    const initial = userData?.name && userData?.surname
    ?`${userData.name[0].toUpperCase()}.${userData.surname[0].toUpperCase()}`:"Личный кабинет";
    return (
        <header className="bg-white shadow">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

                <Link to="/" className="text-2xl font-bold text-blue-600">
                    LawPortal
                </Link>

                <nav className="flex items-center space-x-6">
                    <Link to="/" className="hover:text-blue-600">Главная</Link>
                    <Link to="/services" className="hover:text-blue-600">Услуги</Link>
                    <Link to="/about" className="hover:text-blue-600">О нас</Link>
                    <Link to="/prices" className="hover:text-blue-600">Цены</Link>
                    <Link to="/contacts" className="hover:text-blue-600">Контакты</Link>

                    {/* КНОПКА ВХОДА */}
                    {!user && (
                        <Link
                            to="/auth"
                            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Войти
                        </Link>
                    )}
                    {user &&(
                        <>
                            {userData?.role === "admin" && (
                                <Link to={"/admin"}>Админ</Link>
                            )}
                            <Link to={"profile"} className={"bg-gray-200 text-gray-800 px-4 py-2 rounded-full  font-medium "}
                                  >
                                {initial||"Личный кабинет"}
                            </Link>
                            <button
                                onClick={  ()=>signOut(auth) }
                                className="bg-red-500 text-white rounded-lg hover:bg-red-600 px-4 py-2 rounded-full  font-medium transition"
                                >
                                Выйти
                            </button>
                        </>
                    )}

                </nav>

            </div>
        </header>
    );
}
