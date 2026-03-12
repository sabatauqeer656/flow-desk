import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api/flowdesk/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;