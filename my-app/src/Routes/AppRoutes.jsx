import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Booking from "../pages/Booking";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:slug" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;