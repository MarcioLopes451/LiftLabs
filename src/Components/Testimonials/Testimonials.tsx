import Stars from "../../Images/5star.webp";
import TestimonialCards from "./TestimonialCards";

export default function Testimonials() {
  return (
    <section className="mt-5 px-[32px]">
      <div className="text-white font-Roboto text-center flex justify-center items-center flex-col">
        <img src={Stars} className="w-[200px] lg:w-[362px]" />
        <p className="font-semibold text-2xl">4.9/5.0</p>
        <p className="font-semibold ">Overall Average Rating</p>
      </div>
      <TestimonialCards />
    </section>
  );
}
