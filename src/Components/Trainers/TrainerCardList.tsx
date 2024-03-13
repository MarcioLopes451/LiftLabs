import John from "../../Images/AdobeStock_460801183.jpeg";
import Anna from "../../Images/AdobeStock_458233098.jpeg";
import Davis from "../../Images/AdobeStock_458076778.jpeg";

type Card = {
  img: string;
  name: string;
  type: string;
};

export const TrainerCardList: Card[] = [
  {
    img: John,
    name: "John Franklin",
    type: "Crossfit Coach",
  },
  {
    img: Anna,
    name: "Anna Chaves",
    type: "Cardio & Conditioning",
  },
  {
    img: Davis,
    name: "Davis Mclean",
    type: "Bodybuilding Coach",
  },
];
