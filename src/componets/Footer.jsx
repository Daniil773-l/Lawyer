export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-6xl mx-auto px-4 py-8 text-center">
                <p className="mb-2">
                    © {new Date().getFullYear()} LawPortal. Все права защищены.
                </p>
                <p className="text-sm text-gray-400">
                    Юридическая помощь онлайн
                </p>
            </div>
        </footer>
    );
}
