import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage.jsx";
import MoviesPage from "../pages/moviesPage.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api/flowdesk/home" element={<HomePage />} />
        <Route path="/api/flowdesk/moviesreccomender" element={<MoviesPage />} />

      
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;