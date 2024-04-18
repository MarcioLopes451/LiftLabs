import Header from "../Images/AdobeStock_314895284.jpeg";

type HeaderProps = {
  title: string;
};

export default function HeaderSection({ title }: HeaderProps) {
  return (
    <div className="relative w-full h-[215px] mt-[100px]">
      <img
        src={Header}
        className="w-full h-[215px] md:h-[300px] md:object-cover opacity-60"
      />
      <p
        className="absolute top-[90px] font-Roboto text-white text-3xl font-bold left-[110px] 
      md:left-[310px] lg:left-[630px]"
      >
        {title}
      </p>
    </div>
  );
}
