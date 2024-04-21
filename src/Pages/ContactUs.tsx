import HeaderSection from "../Components/HeaderSection";
import Location from "../Images/352521_location_on_icon.png";
import Phone from "../Images/352510_local_phone_icon.png";
import { useState, useEffect } from "react";
import "../App.css";

export default function ContactUs() {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cols, setCols] = useState<number>(50);
  const [validation, setValidation] = useState<boolean>(false);
  const emailRegex = /\S+@\S+\.\S+/;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCols(30);
      } else {
        setCols(80);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nameValidation = () => {
    if (firstName.trim() === "") {
      console.log("no name");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      console.log("invalid email");
      return;
    }

    if (subject.trim() === "") {
      console.log("no subject");
      return;
    }

    if (message.trim() === "") {
      console.log("no message");
      return;
    }

    console.log("message sent");
    setFirstName("");
    setMessage("");
    setEmail("");
    setSubject("");
    setValidation(true);

    setTimeout(() => {
      setValidation(false);
    }, 5000);
  };
  return (
    <>
      <HeaderSection title="CONTACT US" />
      <section className="mt-10 px-[32px] md:mt-[150px]">
        <div className="flex flex-col justify-center lg:flex-row lg:gap-[50px] lg:px-[50px] xl:gap-[100px]">
          <div className="border-white border-[3px] border-opacity-20 p-10 rounded-md">
            <div className="flex justify-center items-center flex-col gap-10 pb-5">
              <div className="flex justify-center items-center flex-col gap-10 py-5 md:flex-row">
                <div>
                  <label className="font-bold text-2xl">Your Name</label>
                  <br />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-white border-[3px] border-opacity-20 w-[290px] h-[48px] mt-5 rounded-lg bg-transparent"
                  />
                </div>
                <br />
                <div>
                  <label className="font-bold text-2xl">Your Email</label>
                  <br />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-white border-[3px] border-opacity-20 w-[290px] h-[48px] mt-5 rounded-lg bg-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col gap-10 py-5">
                <div>
                  <label className="font-bold text-2xl">Subject</label>
                  <br />
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-white border-[3px] border-opacity-20 w-[290px] h-[48px] mt-5 rounded-lg bg-transparent md:w-[620px]"
                  />
                </div>
                <div>
                  <label className="font-bold text-2xl">Your Message</label>
                  <br />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-white border-[3px] border-opacity-20 h-[341px] mt-5 rounded-lg bg-transparent"
                    cols={cols}
                  ></textarea>
                </div>
              </div>
              <button
                className="w-[168px] h-[49px] bg-[#F9C305] text-black px-[25px] py-[15px] font-semibold font-Roboto text-center rounded-md 
                md:px-[30px]"
                onClick={nameValidation}
              >
                SUBMIT
              </button>
              {validation && (
                <div className="fixed top-[150px] left-10 bg-blue-600 w-[300px] h-[40px] rounded-md fade-in-out">
                  <div className="flex justify-center items-center mt-2">
                    <p>Message has been sent!</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center items-center flex-col gap-[50px]">
              <div className="flex justify-center items-center flex-col gap-[20px] text-center">
                <img src={Location} className="lg:w-[100px]" />
                <p className="font-bold text-xl lg:text-3xl">ADDRESS INFO</p>
                <p>Turners Road</p>
                <p>London, E3 4LF</p>
                <p>England, United Kingdom</p>
              </div>
              <div className="flex justify-center items-center flex-col gap-[20px] lg:mt-[150px] text-center">
                <img src={Phone} className="lg:w-[100px]" />
                <p className="font-bold text-xl lg:text-3xl">CONTACT INFO</p>
                <p>01632 960 001</p>
                <p>support@liftlabs.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20">
          <iframe
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Turners%20Road+(LiftLabs)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
      </section>
    </>
  );
}
