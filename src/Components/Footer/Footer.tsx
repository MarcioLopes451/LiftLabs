import Logo from "../../Images/Liftlabs (1)-cropped.svg";
import Instagram from "../../Images/1161953_instagram_icon 1.png";
import Twitter from "../../Images/5305170_bird_social media_social network_tweet_twitter_icon 1.png";
import Facebook from "../../Images/317727_facebook_social media_social_icon 1.png";
import { Link } from "react-router-dom";

export default function Footer() {
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
            <Link to="/liftLabs/">
              <p className="font-semibold">HOME</p>
            </Link>
            <Link to="/liftLabs/exercise">
              <p>Exercises</p>
            </Link>
            <Link to="/liftLabs/workouts">
              <p>Workouts</p>
            </Link>
            <Link to="/liftLabs/about">
              <p>About</p>
            </Link>
            <Link to="/liftLabs/contact">
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
    </section>
  );
}
