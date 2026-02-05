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

    }
    return (
        <div className={"min-h-screen flex items-center justify-center "}>
            <p className={"text-xl"}>ЗАГРУЗУКА</p>
        </div>
    );

}