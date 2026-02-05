import {Navigate} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

export default function ProtectedRoute({children ,role}) {
    const {user,userData,loading} = useAuth();

    if(loading)
    {
        return <div className={"p-10 text-center"}>Проверка доступа.... </div>
    }
    if(!user)
    {
        return <Navigate to="/auth" replace/>
    }
    if(role && userData?.role !== role)
    {
        return <Navigate to="/" replace={true}/>
    }
    return children;




}