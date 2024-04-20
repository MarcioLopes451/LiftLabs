import Arrow from "../../Images/4308347_arrow_board_dart_focus_target_icon.png";
import Gallery2 from "../../Images/AdobeStock_502759197.jpeg";
import Gallery3 from "../../Images/AdobeStock_551535414.jpeg";
import Mountain from "../../Images/2799200_goals_success_flag_goal_mountain_icon.png";

export default function OurHistory() {
  return (
    <section className="mt-10">
      <div className="flex justify-center items-center flex-col md:flex-row md:flex-wrap l">
        <div
          className="bg-[#1B2126] w-[310px] flex justify-center items-center flex-col gap-3 text-center px-[17.5px] py-[45px] md:w-[330px] 
        md:h-[365px] lg:w-[450px] lg:h-[300px] xl:w-[655px] xl:h-[385px]"
        >
          <img src={Arrow} className="w-[100px] h-[100px]" />
          <p className="font-semibold text-2xl">Our History</p>
          <p className="font-semibold text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img
          src={Gallery2}
          className="h-[365px] w-[310px] md:w-[330px] md:h-[365px] object-cover lg:w-[450px] lg:h-[300px] xl:w-[655px] xl:h-[385px]"
        />
        <img
          src={Gallery3}
          className="h-[365px] md:w-[330px] md:h-[365px] object-cover lg:w-[450px] lg:h-[300px] xl:w-[655px] xl:h-[385px]"
        />
        <div className="bg-[#1B2126] w-[310px] flex justify-center items-center flex-col gap-3 text-center px-[17.5px] py-[45px] md:w-[330px] md:h-[365px] lg:w-[450px] lg:h-[300px] xl:w-[655px] xl:h-[385px]">
          <img src={Mountain} className="w-[100px] h-[100px]" />
          <p className="font-semibold text-2xl">Our History</p>
          <p className="font-semibold text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
