import { useEffect, useState } from "react";

export default function AdminRequests() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/contacts/")
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Заявки клиентов</h1>

      {contacts.length === 0 ? (
        <p className="text-gray-500">Заявок нет</p>
      ) : (
        <div className="space-y-4">
          {contacts.map(c => (
            <div key={c.id} className="bg-white p-4 rounded shadow">
              <p><b>{c.name}</b> ({c.email})</p>
              <p>📞 {c.phone}</p>
              <p>📝 {c.topic}</p>
              <p>💰 {c.price} ₸</p>
              <p className="text-gray-600">{c.message}</p>
              <p className="text-sm text-gray-400">{c.created_at}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}