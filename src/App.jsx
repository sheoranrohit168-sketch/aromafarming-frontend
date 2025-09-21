import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AromaAgro from "./pages/AromaAgro";
import AromaECard from "./pages/AromaECard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import RegisterSeller from "./pages/RegisterSeller";
import FloatingBot from "./components/FloatingBot";
import TermsAndConditions from "./pages/TermsAndConditions";
import CropLoan from "./pages/CropLoan";
import EquipmentFinancing from "./pages/EquipmentFinancing";
import Consultancy from "./pages/Consultancy";
import GovtSchemes from "./pages/GovtSchemes";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aroma-agro" element={<AromaAgro />} />
        <Route path="/aroma-ecard" element={<AromaECard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register-seller" element={<RegisterSeller />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/crop-loan" element={<CropLoan />} />
        <Route path="/equipment-financing" element={<EquipmentFinancing />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/govt-schemes" element={<GovtSchemes />} />



      </Routes>
      <Footer />
      <FloatingBot />
    </Router>
  );
}

export default App;
