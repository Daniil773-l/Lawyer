export default function ServiceCard({ service }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">
                {service.title}
            </h2>

            <p className="text-gray-600 mb-4">
                {service.description}
            </p>

            <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-blue-600">
          {service.price}
        </span>

                <a
                    href="/contacts"
                    className="text-blue-600 font-medium hover:underline"
                >
                    Оставить заявку →
                </a>
            </div>
        </div>
    );
}
