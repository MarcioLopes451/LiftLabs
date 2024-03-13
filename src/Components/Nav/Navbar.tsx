import Logo from "../../Images/Liftlabs (1)-cropped.svg";
import BurgerMenu from "../../Images/9666699_menu_burger_horizontal_icon (1).png";

export default function Navbar() {
  return (
    <div className="w-full h-[101px] bg-black z-50 absolute top-0">
      <div className="flex justify-between items-center px-[32px] pt-[24px]">
        <img src={Logo} className="w-[59px] h-[53px]" />
        <img src={BurgerMenu} className="w-[59px] h-[53px]" />
      </div>
    </div>
  );
}
