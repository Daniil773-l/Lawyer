import { Link } from "react-router-dom";

export default function Navbar() {
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
                    <Link
                        to="/auth"
                        className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Войти
                    </Link>
                </nav>

            </div>
        </header>
    );
}
