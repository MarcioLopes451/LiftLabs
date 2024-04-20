import Header from "../Images/AdobeStock_314895284.jpeg";

type HeaderProps = {
  title: string;
};

export default function HeaderSection({ title }: HeaderProps) {
  return (
    <div
      className="w-full h-[215px] mt-[100px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Header})` }}
    >
      <div className="flex justify-center items-center">
        <p className="font-Roboto text-white text-3xl font-bold mt-20">
          {title}
        </p>
      </div>
    </div>
  );
}
