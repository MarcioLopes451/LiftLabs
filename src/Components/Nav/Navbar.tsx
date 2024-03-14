import Logo from "../../Images/Liftlabs (1)-cropped.svg";
import { useState } from "react";
import "../../MobileNav.css";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [state, setState] = useState<boolean>(false);

  function handleClick() {
    setState(!state);
  }

  return (
    <div className="w-full h-[101px] bg-black z-50 fixed top-0">
      <div className="flex justify-between items-center px-[32px] pt-[24px]">
        <img src={Logo} className="w-[59px] h-[53px]" />
        <div className={`mobile-nav ${state ? "open" : ""}`}>
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
