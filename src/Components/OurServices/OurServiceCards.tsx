import { CardList } from "./CardList";

export default function OurServiceCards() {
  return (
    <div className="flex justify-center items-center flex-col gap-[58px] lg:flex-row lg:flex-wrap">
      {CardList.map((card, id) => (
        <div
          key={id}
          className="bg-[#1B2126] w-[310px] h-[291px] flex justify-center items-center flex-col gap-[25px] text-center px-[17.5px] py-[45px] font-Roboto text-white 
          md:w-[680px] lg:w-[361px] lg:h-[338px]"
        >
          <img src={card.img} alt={card.title} className="w-[60px] h-[60px]" />
          <p className="font-semibold text-2xl">{card.title}</p>
          <p className="font-semibold text-[15px]">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
