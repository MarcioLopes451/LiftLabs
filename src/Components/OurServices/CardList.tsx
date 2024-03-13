import ExerciseImgSrc from "../../Images/6643367_diet_dumbbells_exercise_fitness_gym_icon.png";
import WorkoutImgSrc from "../../Images/9071378_weightlifting_icon.png";
import ProgressionImgSrc from "../../Images/4308198_chart_flowchart_graph_growth_increase_icon.png";

type Card = {
  img: string;
  title: string;
  description: string;
};

export const CardList: Card[] = [
  {
    img: ExerciseImgSrc,
    title: "EXERCISE",
    description:
      "We provide comprehensive exercise routines targeting every muscle group for a well-rounded fitness experience",
  },
  {
    img: WorkoutImgSrc,
    title: "WORKOUTS",
    description:
      "Explore our tailored workout plans designed to meet diverse fitness levels and goals, ensuring effective progress and results for everyone",
  },
  {
    img: ProgressionImgSrc,
    title: "PROGRESSION",
    description:
      "Track your fitness journey with our dedicated progress section, empowering you to monitor achievements, set new goals, and witness continuous improvement",
  },
];
