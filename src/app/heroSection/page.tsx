//  Hero page of my portfolio

"use client"; // for client side rendering we use use client
//  import Images from next.js images
import Image from "next/image";
//  Typewiter effect use for styleing text
import Typewriter from "typewriter-effect";
//  import icons from react icon library
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "lucide-react";
//  creating a export default function
export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full">
      {/*  Set Profile Image on the Left side */}
      <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/images/profile2.jpg"
          height={250}
          width={250}
          alt="My image"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left md:w-1/2">
        {/* h1 introduction  */}
        <h2 className=" text-4xl font-bold ">Hi, I'M KARISTINA</h2>

        <h6 className=" text-3xl md:text-4xl  mt-4 font-bold text-gray-500 uppercase">
          {/* Typewriter Effect use to give style our text */}
           <Typewriter
            options={{
              strings: [
                "Frontend Developer,",
                "Web Designer,",
                " Creative Coder,",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h6> 
        < p className=" flex-col text-lg md:text-2xl mt-4 ">
               I am a Front-End Developer with a passion for creating
                intuitive, dynamic user interfaces. 
              </p>
             
        {/* here we use social media icons just click on it and serach my account  */}
        <div className="flex flex-row mt-5 ">
          {/* MY linkdin Account */}
          <a
            href="https://www.linkedin.com/in/kristina-samuel-21a6942ba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mx-2 h-12 w-12 md:h-16 md:w-16 text-black transition-transform ease-in-out transform hover:scale-110  hover:text-gray-700 rounded-xl" />
          </a>
          {/*  MY GitHub  Account */}
          <a
            href="https://github.com/kristinasamuel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mx-2 h-12 w-12 md:h-16 md:w-16 text-black  transition-transform ease-in-out transform hover:scale-110  hover:text-gray-700 rounded-xl" />
          </a>
          {/* Email Account */}
          <a href="mailto:karistina97@gmail.com">
            <FaEnvelope className="mx-2 h-12 w-12 md:h-16 md:w-16 text-black transition-transform ease-in-out transform hover:scale-110  hover:text-gray-700 rounded-xl" />
          </a>
        </div>
        {/* Creating Links just click on it and move to new page */}
        <div className="mt-6 flex">
          {/* My Resume Page  */}
          <Link
            href="/resume"
            className="p-2  uppercase font-bold  bg-teal-700 hover:bg-teal-400  text-black rounded-xl"
          >
            resume
          </Link>
          {/* Contact Me page */}
          <Link
            href="/contact"
            className=" p-2 uppercase font-bold  bg-teal-700 hover:bg-teal-400 mx-2 text-black rounded-xl"
          >
            Contact
          </Link>
          </div>
      </div>
    </div>
  );
}
