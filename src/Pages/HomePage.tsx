import Navbar from "../Components/Nav/Navbar";
import HeroImg from "../Images/pexels-tima-miroshnichenko-5327534.jpg";
import MainButton from "../Components/MainButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="w-full relative">
        <img src={HeroImg} className="h-[504px]" />
        <div className="absolute top-36 text-white px-[32px]">
          <p className="font-bold w-[217px] text-xl font-Roboto">
            EMPOWERING YOUR JOURNEY: TRANSFORM YOUR BODY, ENERGIZE YOUR MIND,
            AND ACHIEVE YOUR FITNESS GOALS WITH US
          </p>
          <div className="mt-[30px]">
            <MainButton text="OUR EXERCISES" />
          </div>
        </div>
      </div>
    </>
  );
}
