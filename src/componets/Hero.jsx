export default function Hero(){
    return(
    <section className="bg-blue-600 text-white py-20 text-center ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Юридический портал
        </h1>
        <p className="text-lg md:text-2xl mb-6">
            Профессиональная помощь юриста онлайн
        </p>
        <a href="/contacts"
           className="bg-white text-blue-600  font-semibold
           px-6 py-3  rounded hover:bg-gray-100 transition "
           >
            Связаться с нами
        </a>
    </section>
    );
}


