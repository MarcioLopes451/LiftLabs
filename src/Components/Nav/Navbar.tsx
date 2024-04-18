import Logo from "../../Images/Liftlabs (1)-cropped.svg";
import { useState, useEffect } from "react";
import "../../MobileNav.css";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import LoginBtn from "../../Images/2203549_admin_avatar_human_login_user_icon.png";

export default function Navbar() {
  const [state, setState] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      setIsTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    setState(!state);
  }

  return (
    <div
      className={`w-full h-[101px] bg-black z-50 fixed top-0 transition-colors ${
        isTop ? "lg:bg-transparent" : "lg:bg-black lg:h-[120px]"
      }`}
    >
      <div className="flex justify-between items-center px-[32px] pt-[24px] lg:px-[65px] lg:pt-[10px]">
        <img src={Logo} className="w-[59px] h-[53px] lg:w-[90px] lg:h-[91px]" />
        <div className="hidden lg:flex flex-row gap-9 text-white text-[16px] px-6 font-medium tracking-widest text-center">
          <Link to="/liftLabs/">HOME</Link>
          <Link to="/liftLabs/exercise">EXERCISES</Link>
          <Link to="/liftLabs/workouts">WORKOUTS</Link>
          <Link to="/liftLabs/about">ABOUT</Link>
          <Link to="/liftLabs/contact">CONTACT</Link>
        </div>
        <div className="hidden lg:flex flex-row gap-10 items-center">
          <img src={LoginBtn} className="w-[30px] h-[30px]" />
          <p className="bg-transparent border-[3px] border-[#6C6C6C] px-[20px] py-[10px] rounded-lg font-bold">
            SIGN UP
          </p>
        </div>
        <div className={`mobile-nav ${state ? "open" : ""} lg:hidden`}>
          <div className="menu-icon" onClick={handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <MobileNav isOpen={state} onClose={handleClick} />
    </div>
  );
}
