import {useEffect, useState} from "react";
import {auth, db} from "../../Fireabase/config.js";
import {doc, getDoc, collection, query, where, getDocs} from "firebase/firestore";
import {motion} from "framer-motion";

export default function UserDashboard() {
    const [userData, setUserData] = useState(null);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const user = auth.currentUser;
            if (!user) return;
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                setUserData(userSnap.data());
            }
            const q = query(collection(db, "requests"),
                where("userId", "==", user.uid));
            const querySnapshot = await getDocs(q);
            const userRequests = querySnapshot.docs.map((doc) =>
                ({id: doc.id, ...doc.data()}));
            setRequests(userRequests);
            setLoading(false);
        };
        loadData();
    }, []);
    if (loading) {
        return (
            <div className={"min-h-screen flex items-center justify-center "}>
                <p className={"text-xl"}>ЗАГРУЗУКА</p>
            </div>
        );
    }

    return (
        <div className={"min-h-screen bg-gray-50 py-16 px-4"}>
            <div className={"max-w-5xl mx-auto"}>
                <motion.h1
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className={"text-4xl font-bold mb-8"}>
                    Личный кабинет
                </motion.h1>
                <div className={"bg-white p-6 rounded-lg shadow mb-10"}>
                    <h2 className={"text-2xl font-semibold mb-4"}>Мои данные</h2>
                    <p><strong>Имя: </strong>{userData?.name}</p>
                    <p><strong>Email: </strong>{userData?.email}</p>
                    <p><strong>Surname: </strong>{userData?.surname}</p>
                </div>

                <div className={"bg-white p-6 rounded-lg shadow"}>
                    <h2 className={"text-2xl font-semibold mb-6"}>Мои заявки</h2>

                    {requests.length === 0 ? (
                        <p className={"text-gray-600"}>У вас пока нет заявок</p>
                    ) : (
                        <ul className={"space-y-4"}>
                            {requests.map(req => (
                                    <li key={req.id}
                                        className={"flex items-center justify-between border-b pb-3"}>
                                        <span>{req.title}</span>
                                        <span
                                            className={`px-3 py-1 rounded text-sm ${
                                                req.status === "Завершено"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}
                                        >
                                      {req.status}
                                  </span>
                                    </li>
                                )
                            )}
                        </ul>
                    )}
                </div>
            </div>

        </div>
    );

}