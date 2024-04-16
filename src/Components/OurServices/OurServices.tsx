import OurServiceCards from "./OurServiceCards";

export default function OurServices() {
  return (
    <section className="mt-10 px-[32px] flex justify-center items-center text-white font-Roboto text-center flex-col">
      <div>
        <h2 className="font-semibold text-2xl">OUR SERVICES</h2>
        <p className="mt-[19px] text-[15px] md:w-[520px] md:px-[20px]">
          Our workout app offers a comprehensive suite of services, including
          personalized workout plans, progress tracking, expert guidance from
          certified trainers, and a supportive community to keep you motivated
          and on track towards your fitness goals
        </p>
      </div>
      <div className="mt-[30px]">
        <OurServiceCards />
      </div>
    </section>
  );
}
