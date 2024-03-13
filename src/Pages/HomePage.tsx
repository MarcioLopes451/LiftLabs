import Navbar from "../Components/Nav/Navbar";
import HeroImg from "../Images/pexels-tima-miroshnichenko-5327534.jpg";
import MainButton from "../Components/MainButton";
import OurServices from "../Components/OurServices/OurServices";
import SponsorBanners from "../Components/SponsorBanners/SponsorBanners";
import Trainers from "../Components/Trainers/Trainers";
import Testimonials from "../Components/Testimonials/Testimonials";
import SignUpNow from "../Images/AdobeStock_320459487.jpeg";
import Footer from "../Components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section className="w-full relative">
        <img src={HeroImg} className="h-[504px]" />
        <div className="absolute top-36 text-white px-[32px]">
          <p className="font-bold w-[217px] text-xl font-Roboto">
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
        <img src={SignUpNow} className="h-[400px] object-cover" />
        <div className="absolute top-[150px] left-[80px] flex justify-center items-center flex-col gap-[70px]">
          <p className="font-bold font-Roboto text-3xl text-white">
            SIGN UP NOW
          </p>
          <MainButton text="CLICK HERE" />
        </div>
      </section>
      <Footer />
    </>
  );
}
