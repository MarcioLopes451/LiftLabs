import Logo from "../../Images/Liftlabs (1)-cropped.svg";
import Instagram from "../../Images/1161953_instagram_icon 1.png";
import Twiiter from "../../Images/5305170_bird_social media_social network_tweet_twitter_icon 1.png";
import Facebook from "../../Images/317727_facebook_social media_social_icon 1.png";

export default function Footer() {
  return (
    <section className="mt-20 px-[32px] text-white font-Roboto">
      <div className="flex justify-center items-center flex-col gap-10">
        <img src={Logo} className="w-[59px] h-[53px]" />
        <div className="flex justify-center items-start flex-row gap-20">
          <div className="flex justify-center items-start flex-col gap-[50px]">
            <p className="font-semibold">HOME</p>
            <p>Exercises</p>
            <p>Workouts</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="flex justify-center items-start flex-col gap-[50px]">
            <p className="font-semibold">SUPPORT</p>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>My Account</p>
          </div>
        </div>
        <div className="mt-6 flex justify-evenly items-center gap-5">
          <img src={Instagram} />
          <img src={Twiiter} />
          <img src={Facebook} />
        </div>
      </div>
      <p className="text-center mt-5">Privacy Policy | © 2024 LiftLabs</p>
    </section>
  );
}
