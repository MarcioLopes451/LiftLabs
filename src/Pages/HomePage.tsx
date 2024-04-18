import HeroImg from "../Images/pexels-tima-miroshnichenko-5327534.jpg";
import MainButton from "../Components/MainButton";
import OurServices from "../Components/OurServices/OurServices";
import SponsorBanners from "../Components/SponsorBanners/SponsorBanners";
import Trainers from "../Components/Trainers/Trainers";
import Testimonials from "../Components/Testimonials/Testimonials";
import SignUpNow from "../Images/AdobeStock_320459487.jpeg";

export default function HomePage() {
  return (
    <>
      <section className="w-full relative">
        <img
          src={HeroImg}
          className="h-[504px] lg:w-full lg:h-[779px] brightness-90"
        />
        <div className="absolute top-36 text-white px-[32px] lg:px-[150px] lg:top-56">
          <p
            className="font-bold w-[217px] text-xl font-Roboto 
          md:w-[342px] md:text-2xl lg:w-[481px] lg:text-3xl tracking-widest"
          >
            EMPOWERING YOUR JOURNEY: TRANSFORM YOUR BODY, ENERGIZE YOUR MIND,
            AND ACHIEVE YOUR FITNESS GOALS WITH US
          </p>
          <div className="mt-[30px]">
            <MainButton text="OUR EXERCISE" />
          </div>
        </div>
      </section>
      <OurServices />
      <SponsorBanners />
      <Trainers />
      <Testimonials />
      <section className="mt-[200px] relative">
        <img
          src={SignUpNow}
          className="h-[400px] object-cover lg:w-full lg:h-[500px] brightness-90"
        />
        <div
          className="absolute top-[150px] left-[80px] flex justify-center items-center flex-col gap-[70px] 
        md:left-[280px] lg:left-[630px]"
        >
          <p className="font-bold font-Roboto text-3xl text-white">
            SIGN UP NOW
          </p>
          <MainButton text="CLICK HERE" />
        </div>
      </section>
    </>
  );
}
