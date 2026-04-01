import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Allpackage from "./pages/Allpackage";
import Booking from "./pages/Booking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Allpackage />} />
      <Route path="/booking/:slug" element={<Booking />} />
      <Route path="/success" element={<Success />} />  {/* ✅ MUST */}

    </Routes>
  );
}

export default App;