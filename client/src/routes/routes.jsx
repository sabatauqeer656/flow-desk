import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage.jsx";
import MoviesPage from "../pages/moviesPage.jsx";
import HobbiesPage from "../pages/hobbiesPage.jsx";
import SignupPage from "../pages/signupPage.jsx";
import LoginPage from "../pages/loginPage.jsx";
import ProtectedRoutes from "../components/auth/ProtectedRoutes.jsx";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/api/flowdesk/signup" element={<SignupPage />} />
          <Route path="/api/flowdesk/login" element={< LoginPage/>}  />
        
<Route element={<ProtectedRoutes/>}>
       <Route path="/api/flowdesk/home" element={<HomePage />} />
        <Route path="/api/flowdesk/moviesreccomender" element={<MoviesPage />} />

        <Route path="/api/flowdesk/findnewhobbies" element={<HobbiesPage />} />

</Route>

        
        

      
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;