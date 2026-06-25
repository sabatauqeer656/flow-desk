import { useAuth } from "../auth/useAuth.jsx";
import { Outlet, Navigate } from "react-router-dom";


function ProtectedRoutes() {

  const { authUser, loading } = useAuth();


  if (loading) {
    return <div>Checking auth...</div>;
  }


  return authUser 
    ? <Outlet/> 
    : <Navigate to="/api/flowdesk/login"/>;
}


export default ProtectedRoutes;