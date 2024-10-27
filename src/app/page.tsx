"use client"
import HeroSection from "../components/heroSection/page";
import Project from "../components/projects/page";
import ContactPage from "../components/contact/page";
import About from "../components/about/page";
import HeroSectionPage from "../components/heroSection/page";
import AboutPage from "../components/about/page";
import ProjectPage from "../components/projects/page";
export default function HomePage(){
    return (
    
       <div> 
        <HeroSection/>
       
        <AboutPage/>
        
        <ProjectPage/>
        
        <ContactPage/>
        
       </div>
     
    )
}

