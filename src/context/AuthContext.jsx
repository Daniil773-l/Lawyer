import {createContext, useContext, useEffect, useState} from 'react'
import {auth, db} from "../Fireabase/config.js";
import {onAuthStateChanged} from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                const docRef = doc(db, "users", firebaseUser.uid);
                const snap = await getDoc(docRef);
                if (snap.exists()) {
                    setUserData(snap.data());
                }
            } else {
                setUser(null);
                setUserData(null);
            }
            setLoading(false);
        });
        return () => unsub();
    }, []);

    return (
        <AuthContext.Provider value={{user, userData, loading}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);