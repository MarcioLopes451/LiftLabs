import Logo from "../../Images/Liftlabs (1)-cropped.svg";
import Instagram from "../../Images/1161953_instagram_icon 1.png";
import Twitter from "../../Images/5305170_bird_social media_social network_tweet_twitter_icon 1.png";
import Facebook from "../../Images/317727_facebook_social media_social_icon 1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../App.css";

export default function Footer() {
  const [app, setApp] = useState<boolean>(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleAppClick = () => {
    setApp(true);
    setTimeout(() => {
      setApp(false);
    }, 5000);
  };
  return (
    <section className="mt-20 px-[32px] text-white font-Roboto pb-10">
      <div className="flex justify-center items-center flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <img
          src={Logo}
          className="w-[59px] h-[53px] md:w-[120px] md:h-[91.58px] lg:hidden"
        />
        <div className="flex justify-center items-start flex-row gap-20 md:flex-col md:gap-10 md:items-center lg:flex-row lg:items-start lg:gap-[100px]">
          <img
            src={Logo}
            className="hidden w-[59px] h-[53px] md:w-[120px] md:h-[91.58px] lg:block"
          />
          <div className="flex justify-center items-start flex-col gap-[50px] md:flex-row lg:flex-col">
            <Link to="/liftLabs/" onClick={scrollUp}>
              <p className="font-semibold">HOME</p>
            </Link>
            <Link to="#" onClick={handleAppClick}>
              <p>Exercises</p>
            </Link>
            <Link to="#" onClick={handleAppClick}>
              <p>Workouts</p>
            </Link>
            <Link to="/liftLabs/about" onClick={scrollUp}>
              <p>About</p>
            </Link>
            <Link to="/liftLabs/contact" onClick={scrollUp}>
              <p>Contact</p>
            </Link>
          </div>
          <div className="flex justify-center items-start flex-col gap-[50px] md:flex-row lg:flex-col">
            <p className="font-semibold">SUPPORT</p>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>My Account</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-6 flex justify-evenly items-center gap-5">
            <img src={Instagram} />
            <img src={Twitter} />
            <img src={Facebook} />
          </div>
          <p className="text-center mt-5 md:mt-10 opacity-80">
            Privacy Policy | © 2024 LiftLabs
          </p>
        </div>
      </div>
      {app && (
        <div className="fixed top-[100px] left-9 bg-blue-600 w-[300px] h-[40px] rounded-md fade-in md:top-[120px]">
          <div className="flex justify-center items-center mt-2 font-Roboto">
            <p className="font-regular">
              Download our app for full experience!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
