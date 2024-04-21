import { Link } from "react-router-dom";
import { useState } from "react";
import "../../App.css";

type Nav = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: Nav) {
  const [app, setApp] = useState<boolean>(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    onClose();
  };
  const handleAppClick = () => {
    setApp(true);
    setTimeout(() => {
      setApp(false);
    }, 5000);
  };
  return isOpen ? (
    <div className="fixed top-24 bg-transparent z-50 font-Roboto w-full">
      <div className="bg-black py-9 h-screen">
        <div className="flex mt-20 flex-col gap-9 text-white text-2xl px-6 font-light tracking-widest text-center">
          <Link to="/LiftLabs/" onClick={scrollUp}>
            HOME
          </Link>
          <Link to="#" onClick={handleAppClick}>
            EXERCISES
          </Link>
          <Link to="#" onClick={handleAppClick}>
            WORKOUTS
          </Link>
          <Link to="/LiftLabs/about" onClick={scrollUp}>
            ABOUT
          </Link>
          <Link to="/LiftLabs/contact" onClick={scrollUp}>
            CONTACT
          </Link>
        </div>
      </div>
      {app && (
        <div className="fixed top-[100px] left-[38px] bg-blue-600 w-[300px] h-[40px] rounded-md fade-in">
          <div className="flex justify-center items-center mt-2 font-Roboto">
            <p className="font-regular">
              Download our app for full experience!
            </p>
          </div>
        </div>
      )}
    </div>
  ) : null;
}
