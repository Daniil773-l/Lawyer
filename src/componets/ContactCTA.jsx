export default function ContactCTA() {
    return (
        <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Хотите консультацию?</h2>
            <p className="mb-6 text-gray-700">Заполните форму на странице контактов</p>
            <a
                href="/contacts"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
                Перейти к форме
            </a>
        </section>
    );
}