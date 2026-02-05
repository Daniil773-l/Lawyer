const services =[
    {title:"Консультации", description:"Онлайн и офлайн консултации"},
    {title:"Состовление документов",description: "Договоры,иски,жалобы"},
    {title: "Защита в суде",description: "Поддержка на всех этапах"}
];


export  default  function ServicessPreview(){
    return (
        <section className="py-16 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Наши услуги</h2>
            <div className="grid grid-cols-3 gap-8">
                {services.map((s,idx)=>(
                    <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                        <p className="text-gray-600">{s.description}</p>

                    </div>
                ))}
            </div>
        </section>
    )
}