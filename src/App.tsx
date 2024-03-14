import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Nav/Navbar";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-[#141619] text-white font-Roboto">
        <Navbar />
        <Routes>
          <Route path="/liftLabs/" element={<HomePage />} />
          <Route path="/liftLabs/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
