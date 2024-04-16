import HeaderSection from "../Components/HeaderSection";
import MainButton from "../Components/MainButton";
import Location from "../Images/352521_location_on_icon.png";
import Phone from "../Images/352510_local_phone_icon.png";
import LiftLabsLocation from "../Images/liftlabs google maps.png";

export default function ContactUs() {
  return (
    <>
      <HeaderSection title="CONTACT US" />
      <section className="mt-10 px-[32px] md:mt-[150px]">
        <div className="border-white border-[3px] border-opacity-20">
          <div className="flex justify-center items-center flex-col gap-10 pb-5">
            <div className="flex justify-center items-center flex-col gap-10 py-5 md:flex-row">
              <div>
                <p className="font-bold text-2xl">Your Name</p>
                <div className="border-white border-[3px] border-opacity-20 w-[290px] h-[48px] mt-5 rounded-lg"></div>
              </div>
              <div>
                <p className="font-bold text-2xl">Your Email</p>
                <div className="border-white border-[3px] border-opacity-20 w-[290px] h-[48px] mt-5 rounded-lg"></div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-10 py-5">
              <div>
                <p className="font-bold text-2xl">Subject</p>
                <div className="border-white border-[3px] border-opacity-20 w-[290px] h-[48px] mt-5 rounded-lg md:w-[620px]"></div>
              </div>
              <div>
                <p className="font-bold text-2xl">Your Message</p>
                <div className="border-white border-[3px] border-opacity-20 w-[290px] h-[341px] mt-5 rounded-lg md:w-[620px]"></div>
              </div>
            </div>
            <MainButton text="SUBMIT" />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-center items-center flex-col gap-[50px]">
            <div className="flex justify-center items-center flex-col gap-[20px]">
              <img src={Location} />
              <p className="font-bold text-xl">ADDRESS INFO</p>
              <p>Turners Road</p>
              <p>London, E3 4LF</p>
              <p>England, United Kingdom</p>
            </div>
            <div className="flex justify-center items-center flex-col gap-[20px]">
              <img src={Phone} />
              <p className="font-bold text-xl">CONTACT INFO</p>
              <p>01632 960 001</p>
              <p>support@liftlabs.com</p>
            </div>
            <img
              src={LiftLabsLocation}
              className="max-w-[375px] h-[300px] md:max-w-[680px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
