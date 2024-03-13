import { TrainerCardList } from "./TrainerCardList";
import "../../Slider.css";
//import { useState } from "react";

export default function TrainerCards() {
  //const [currentIndex, setCurrentIndex] = useState(0);

  //   const nextSlide = () => {
  //     setCurrentIndex((index) => {
  //       if (index === TrainerCardList.length - 1) return 0;
  //       return index + 1;
  //     });
  //   };

  //   const prevSlide = () => {
  //     setCurrentIndex((index) => {
  //       if (index === 0) return TrainerCardList.length - 1;
  //       return index - 1;
  //     });
  //   };

  return (
    <div className="slider relative">
      {/* <button
        className="prev absolute top-1/2 left-0 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="next absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        &#10095;
      </button> */}
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

//flex justify-center items-center overflow-x-auto whitespace-nowrap mt-20
