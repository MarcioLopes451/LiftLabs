import Gordonson from "../../Images/gordonson (1)-cropped.svg";
import Henderson from "../../Images/gordonson-cropped.svg";
import Giggling from "../../Images/Untitled design (2)-cropped.svg";
import Alexander from "../../Images/Untitled design-cropped.svg";
import Strength from "../../Images/Untitled design (1)-cropped.svg";

export default function SponsorBanners() {
  return (
    <section className="mt-[70px] px-[32px] bg-[#1B2126] mx-[32px] flex justify-center items-center flex-col gap-[36px] py-[36px]">
      <img src={Gordonson} className="w-[150px] h-[120px]" />
      <img src={Henderson} className="w-[150px] h-[120px]" />
      <img src={Giggling} className="w-[150px] h-[120px]" />
      <img src={Alexander} className="w-[150px] h-[120px]" />
      <img src={Strength} className="w-[150px] h-[120px]" />
    </section>
  );
}
