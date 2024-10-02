"use client"
import { Fragment } from "react";
import HeroSection from "./heroSection/page";
import Project from "./projects/page";
import ContactPage from "./contact/page";
import About from "./about/page";
export default function Home (){
    return (
    
       <div> 
        <HeroSection/>
       
        <About/>
        
        <Project/>
        
        <ContactPage/>
        
       </div>
     
    )
}

