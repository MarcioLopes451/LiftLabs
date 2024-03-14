import { Link } from "react-router-dom";

type Nav = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen }: Nav) {
  return isOpen ? (
    <div className="fixed top-24 bg-transparent z-50 font-Roboto w-full">
      <div className="bg-black py-9 h-screen">
        <div className="flex mt-20 flex-col gap-9 text-white text-2xl px-6 font-light tracking-widest text-center">
          <Link to="/liftLabs/">HOME</Link>
          <Link to="/liftLabs/exercise">EXERCISES</Link>
          <Link to="/liftLabs/workouts">WORKOUTS</Link>
          <Link to="/liftLabs/about">ABOUT</Link>
          <Link to="/liftLabs/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  ) : null;
}
