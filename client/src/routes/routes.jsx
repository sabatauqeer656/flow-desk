import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage.jsx";
import MoviesPage from "../pages/moviesPage.jsx";
import HobbiesPage from "../pages/hobbiesPage.jsx";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api/flowdesk/home" element={<HomePage />} />
        <Route path="/api/flowdesk/moviesreccomender" element={<MoviesPage />} />
        <Route path="/api/flowdesk/findnewhobbies" element={<HobbiesPage />} />

      
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;