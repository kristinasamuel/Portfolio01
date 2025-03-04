import Image from "next/image";
//  Typewiter effect use for styleing text
import Typewriter from "typewriter-effect";
//  import icons from react icon library
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full">
      {/*  Set Profile Image on the Left side */}
      <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/images/profile.jpg"
          height={250}
          width={250}
          alt="My image"
          className="rounded-full "
        />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left md:w-1/2">
        {/* h1 introduction  */}
        <h2 className=" text-4xl font-bold ">Hi, I'M KARISTINA</h2>

        <h6 className=" text-3xl md:text-4xl  mt-4 font-bold text-teal-500 uppercase">
          {/* Typewriter Effect*/}
           <Typewriter
            options={{
              strings: [
                "Frontend Developer,",
                "Web Designer,",
                "UI/UX designer",
                "Creative Coder,",
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
             
        <div className="flex flex-row mt-5 ">
          {/* MY linkdin Account */}
          <Link
            href="https://www.linkedin.com/in/kristina-samuel-21a6942ba"
            target="_blank"
          >
            <FaLinkedin className="mx-2 h-12 w-12 md:h-16 md:w-16 text-black transition-transform ease-in-out transform hover:scale-110  hover:text-gray-700 rounded-xl" />
          </Link>
          {/*  MY GitHub  Account */}
          <Link
            href="https://github.com/kristinasamuel"
            target="_blank"
          >
            <FaGithub className="mx-2 h-12 w-12 md:h-16 md:w-16 text-black  transition-transform ease-in-out transform hover:scale-110  hover:text-gray-700 rounded-xl" />
          </Link>
          {/* Email Account */}
          <Link href="mailto:karistina97@gmail.com">
            <FaEnvelope className="mx-2 h-12 w-12 md:h-16 md:w-16 text-black transition-transform ease-in-out transform hover:scale-110  hover:text-gray-700 rounded-xl" />
          </Link>
        </div>
        {/* Creating Links just click on it and move to new page */}
        <div className="mt-6 ">
          {/*Resume Page  */}
          <ul className="flex flex-row">
            <li>
          <Link
            href="/resume"
            className=" p-2 h-16 w-16  uppercase font-bold  bg-teal-400 hover:bg-teal-600  text-black rounded-xl"
          >
            resume
          </Link></li>
          {/* Contact Me page */}
          <li>
          <Link
            href="/contact"
            className=" p-2 uppercase font-bold  bg-teal-400 hover:bg-teal-500 mx-2 text-black rounded-xl"
          >
            Contact
          </Link></li>
          </ul> 
          </div>
      </div>
    </div>
  );
}
