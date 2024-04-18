import TrainerCards from "./TrainerCards";

export default function Trainers() {
  return (
    <section className="mt-[90px] text-white font-Roboto px-[32px]">
      <div className="flex justify-center items-center flex-col text-center">
        <p className="text-2xl font-semibold">MEET OUR TRAINERS</p>
        <p className="mt-5 text-[15px] lg:px-[400px]">
          Benefit from the expertise of our experienced gym trainers who are
          committed to guiding, motivating, and customizing workouts to help you
          reach your fitness aspirations
        </p>
      </div>
      <TrainerCards />
    </section>
  );
}
