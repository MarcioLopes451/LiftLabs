import FrequentQuestions from "../Components/FrequentQuestions/FrequentQuestions";
import HeaderSection from "../Components/HeaderSection";
import MainButton from "../Components/MainButton";
import OurHistory from "../Components/OurHistory/OurHistory";
import Gallery1 from "../Images/AdobeStock_214596042.jpeg";
import Gallery4 from "../Images/AdobeStock_333919715.jpeg";

export default function AboutUs() {
  return (
    <>
      <HeaderSection title="ABOUT US" />
      <section className="mt-10 px-[32px] md:mt-40 md:px-[52px]">
        <div className="text-center flex justify-center items-center flex-col">
          <p className="font-bold text-2xl">WHO WE ARE</p>
          <p className="mt-10 text-[15px] font-semibold">
            We are a dynamic workout brand dedicated to empowering individuals
            to achieve their fitness goals and lead healthier lifestyles. Our
            roots stem from a passion for fitness and a commitment to helping
            others unlock their potential. Founded by a team of fitness
            enthusiasts, we emerged from a desire to revolutionize the fitness
            industry by providing innovative workout solutions tailored to meet
            the diverse needs of our community.
          </p>
          <div className="mt-10">
            <MainButton text="READ MORE" />
          </div>
        </div>
        <img src={Gallery1} className="mt-10" />
        <OurHistory />
        <img src={Gallery4} className="mt-10" />
        <FrequentQuestions />
      </section>
    </>
  );
}
