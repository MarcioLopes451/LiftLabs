import FrequentQuestions from "../Components/FrequentQuestions/FrequentQuestions";
import HeaderSection from "../Components/HeaderSection";
import MainButton from "../Components/MainButton";
import OurHistory from "../Components/OurHistory/OurHistory";
import Gallery1 from "../Images/AdobeStock_214596042.jpeg";

export default function AboutUs() {
  return (
    <>
      <HeaderSection title="ABOUT US" />
      <section className="mt-10 px-[32px] md:mt-40 md:px-[52px] lg:px-[62px]">
        <div className="text-center flex justify-center items-center flex-col lg:flex-row lg:text-left lg:justify-between lg:gap-7">
          <div>
            <p className="font-bold text-2xl">WHO WE ARE</p>
            <p className="mt-10 text-[15px] font-semibold lg:w-[420px] xl:w-[500px]">
              We are a dynamic workout brand dedicated to empowering individuals
              to achieve their fitness goals and lead healthier lifestyles. Our
              roots stem from a passion for fitness and a commitment to helping
              others unlock their potential. Founded by a team of fitness
              enthusiasts, we emerged from a desire to revolutionize the fitness
              industry by providing innovative workout solutions tailored to
              meet the diverse needs of our community.
            </p>
            <div className="mt-10">
              <MainButton text="READ MORE" />
            </div>
          </div>
          <img src={Gallery1} className="mt-10 lg:w-[500px] lg:h-[300px] " />
        </div>
        <OurHistory />
        <FrequentQuestions />
      </section>
    </>
  );
}
