import { TrainerCardList } from "./TrainerCardList";
import "../../Slider.css";

export default function TrainerCards() {
  return (
    <div className="slider relative lg:justify-center">
      {TrainerCardList.map((card, index) => (
        <div key={index} className="slide">
          <img src={card.img} alt={card.name} className="w-[254px] h-[349px]" />
          <div className="text-center">
            <p>{card.name}</p>
            <p>{card.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
