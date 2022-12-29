"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiCertification } from "react-icons/bi";
import CountUp from "@/CountUp";

function Home() {
  // header text
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const headerText = [
    "Laws. Lawyers. Legal Help.",
    "Hire Attorneys For Legal Issues.",
    "In Trouble?",
    "Our Lawyers Can Help.",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(320 - Math.random() * 100);
  const period = 1500;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [index]);
  const tick = () => {
    let i = loopNum % headerText.length;
    let fullText = headerText[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  // practice areas
  const practices = [
    {
      id: 1,
      name: "Criminal Law",
      icon: <AiFillSafetyCertificate className="text-6xl" />,
    },
    {
      id: 2,
      name: "Family Law",
      icon: <BiCertification className="text-6xl" />,
    },
    {
      id: 3,
      name: "Business Law",
      icon: <AiFillSafetyCertificate className="text-6xl" />,
    },
    {
      id: 4,
      name: "Litigation & Dispute Resolution",
      icon: <BiCertification className="text-6xl" />,
    },
    {
      id: 5,
      name: "Administrative & Government Affairs",
      icon: <AiFillSafetyCertificate className="text-4xl text-primary-200" />,
    },
  ];

  // counter for the info section
  const myRef = useRef(null);
  const [isCounterVisible, setIsCounterVisible] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsCounterVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

//handle navigation to contact form
  const handleClick = (e) => {
      e.preventDefault();
      document.querySelector("#find-consultation").scrollIntoView({
        behavior: "smooth",
      });
  }

  return (
    <div>
      <div className=" text-white flex flex-col justify-between items-center">
        <div className="flex justify-center items-center mx-4 bg-primary-100 min-h-[500px] w-full ">
          <p className="text-5xl md:text-7xl text-center mx-4 min-w-5xl max-w-5xl min-h-[200px] text-white">
            {text}
          </p>
        </div>
        <section className="relative h-4 w-full">
          <div className="w-80 h-96 rounded-t-full rounded-b-lg bg-white shadow-md absolute -top-28 sm:-top-48 mx-auto left-0 right-0">
            <Image
              src="/images/woman-1.png"
              alt="lawyer"
              width={400}
              height={400}
            />
            <div className="w-[300px] mx-auto bg-primary-100 h-20 rounded-lg flex justify-center items-center">
              <button
                onClick={handleClick}
                className="text-white text-2xl px-2 py-1 w-full h-full font-medium hover:scale-105 transition-all duration-300"
              >
                Find Consultation
              </button>
            </div>
          </div>
        </section>
        <section className="practiceArea flex bg-slate-100 rounded-lg py-16 justify-center mt-[260px] md:mt-[150px]">
          <div className="w-5/6 flex flex-col justify-start gap-4">
            <h1 className="font-bold text-3xl">Our Best Practice Areas</h1>
            <p>We have best lawyers in these areas.</p>
            <div className="flex flex-col items-center md:flex-row gap-8">
              {practices.map((area) => (
                <div
                  key={area.id}
                  className="h-64 w-56 px-2 bg-white rounded-xl shadow-md flex flex-col justify-center items-center gap-4 hover:scale-105 transition-all duration-300"
                >
                  {area.icon}
                  <h2 className="text-center font-semibold">{area.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="infoArea w-full">
          <div className="py-24 sm:py-36 flex flex-col items-center justify-center">
            <div className="py-4 ml-12 md:ml-28">
              <h2 className="text-lg text-primary-200 font-semibold">
                Sets a Global Standard in Law
              </h2>
              <h1 className="text-primary-100 font-bold text-4xl md:text-[45px] leading-normal sm:leading-relaxed w-5/6 py-4">
                We are ready to provide best service for our clients
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-center ">
              <div className="rounded-lg md:w-[400px] md:h-[400px] relative overflow-hidden">
                <Image
                  alt="consulting picture"
                  src="/images/consult.png"
                  width={350}
                  height={350}
                  className="overflow-hidden"
                />
              </div>
              <div className="max-w-lg flex flex-col gap-8 mx-8">
                <p className="font-bold">
                  Laws. is one of the leading law firm alliances worldwide. Its
                  law firm members are amongst the most experienced and
                  professional in their respective jurisdictions. They fully
                  cover all the main areas required of the legal profession for
                  their demanding international clientele, for corporate or
                  private clients alike.
                </p>
                <p>
                  Furthermore, Laws. combine in-depth knowledge with an
                  efficient, solution-oriented approach. From preliminary legal
                  advise to litigation, from civil law to case law, our
                  affiliated law firms are well established, preeminent and
                  independent. We understand our clients, needs and add
                  substantial value to their complex and global businesses
                  through knowledge and proactivity.
                </p>
                <div className="font-bold">
                  <div className="flex gap-2">
                    <BiCertification className="text-2xl" />
                    <p>Over 60 years of combined legal experience.</p>
                  </div>
                  <div className="flex gap-2 ">
                    <BiCertification className="text-2xl" />
                    <p>Highly Professional Staff, Accurate Needs Analysis.</p>
                  </div>
                  <div className="flex gap-2 ">
                    <BiCertification className="text-2xl" />
                    <p>
                      Our team is available 24/7 to provide you with help and
                      support.
                    </p>
                  </div>
                </div>
                <div className="min-w-min">
                  <Link href="/about">
                    <div className="text-lg sm:text-base py-4 px-4 rounded-lg cursor-pointer w-56 bg-primary-100 text-white hover:bg-white hover:text-primary-100 border hover:border-primary-100 text-center transition-all duration-300 ease-in">
                      About Us
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col w-44 justify-center gap-12">
                <div ref={myRef}>
                  <CountUp
                    end="112"
                    isCounterVisible={isCounterVisible}
                    counterSpeed="10"
                  />
                  <p className="w-28">Branches</p>
                </div>
                <BiCertification className="text-3xl" />
                <div ref={myRef}>
                  <CountUp
                    end="7976"
                    isCounterVisible={isCounterVisible}
                    counterSpeed="0.10"
                  />
                  <p className="w-28">Happy Clients Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="formArea inset-0 relative w-full h-[80vh] md:h-screen overflow-hidden bg-primary-100">
          <Image
            alt="background picture"
            src="/images/bg.png"
            width={1920}
            height={1080}
          />
          <div
            className="absolute mx-auto top-3 left-5 right-0 md:top-16 md:left-16 md:justify-start w-full h-full"
          >
            <form className="bg-white bg-opacity-90 hover:bg-opacity-100 py-12 px-8 rounded-xl w-80 md:h-[500px] md:w-[420px] transition-all duration-200 ease-in">
              <div id="find-consultation" className="flex flex-col md:gap-2">
                <h1 className="text-center font-bold mb-2 text-primary-100">
                  Contact Form
                </h1>
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="email"
                    name="floating_email"
                    autoComplete="off"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-xl lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-xl lg:text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email Adresss
                  </label>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-xl lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-xl lg:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    autoComplete="off"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-xl lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-xl lg:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Surname
                  </label>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="tel"
                    autoComplete="off"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-xl lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-xl lg:text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    autoComplete="off"
                    name="floating_message"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-xl lg:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_message"
                    className="peer-focus:font-medium absolute text-xl lg:text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your message
                  </label>
                </div>
                <div className="flex justify-center">
                  <button className="text-xs sm:text-base font-semibold py-4 px-8 rounded-md bg-primary-200 text-white hover:bg-primary-100 hover:text-white transition-all duration-300 ease-in">
                    Submit
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6"></div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
