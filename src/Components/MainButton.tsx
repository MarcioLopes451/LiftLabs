import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
};
export default function MainButton({ text }: ButtonProps) {
  return (
    <Link
      to="/"
      className="w-[168px] h-[49px] bg-[#F9C305] text-black px-[25px] py-[15px] font-semibold font-Roboto"
    >
      {text}
    </Link>
  );
}
