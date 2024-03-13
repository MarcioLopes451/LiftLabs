import { TestimonialCardsList } from "./TestimonialCardList";
import Stars from "../../Images/5star 2.png";
import "../../Slider.css";

export default function TestimonialCards() {
  return (
    <div className="slider relative">
      {TestimonialCardsList.map((card, id) => (
        <div
          key={id}
          className="slide bg-[#1B2126] w-[310px] flex justify-center items-start flex-col gap-[25px] px-[17.5px] py-[45px] font-Roboto text-white"
        >
          <div className="flex gap-5">
            <img
              src={card.img}
              alt={card.title}
              className="w-[60px] h-[60px]"
            />
            <div>
              <p className="font-semibold text-2xl">{card.title}</p>
              <p className="text-[15px] italic opacity-80">{card.name}</p>
            </div>
          </div>
          <p className="text-[15px] italic opacity-80">{card.comment}</p>
          <div className="mt-2 flex gap-10 items-center">
            <img src={Stars} className="w-[100px]" />
            <p className="font-semibold">5.0/5.0 Rating</p>
          </div>
        </div>
      ))}
    </div>
  );
}
