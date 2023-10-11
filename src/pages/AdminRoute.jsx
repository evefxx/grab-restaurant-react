import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const AdminRoute = ({children}) => {
    const {user} = useAuthContext();
    if (user) {
        return <Navigate to="/signin"/>;
    }
    if(!user.roles.include("ROUTE_ADMIN")) return <Navigate to="/Notallow"/>
    return children
}
export default AdminRoute;