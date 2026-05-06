import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home.jsx";
import Transparency from "./pages/Transparency.jsx";
import DonationPage from "./pages/DonationPage.jsx";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/doacao" element={<DonationPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;