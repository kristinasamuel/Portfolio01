"use client";
import HeroSection from "./heroSection/page";

import ContactPage from "./contact/page";
import AboutPage from "./about/page";
import ProjectPage from "./projects/page";

export default function HomePage(){
    return (
       <div > 
        <HeroSection/>
        <AboutPage/>
        <ProjectPage/>
        <ContactPage/>
       </div>
    )
}

