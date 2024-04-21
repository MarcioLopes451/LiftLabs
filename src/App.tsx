import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Nav/Navbar";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-[#141619] text-white font-Roboto">
        <Navbar />
        <Routes>
          <Route path="/LiftLabs/" element={<HomePage />} />
          <Route path="/LiftLabs/about" element={<AboutUs />} />
          <Route path="/LiftLabs/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
