"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  
  {
    num: '01',
    category: 'Software',
    title: 'Parking Payment Management System',
    description: 'The Parking Payment Management System is a Java-based application with a user-friendly graphical user interface (GUI). Developed by a dedicated team of professionals, this system aims to streamline the parking experience for daily commuters and parking management authorities.',
    stack: [
      {name: "Java"},
      {name: "MySQL"}
    ],
    image: '/assets/work/parking-payment-management-system.jpg',
    live: "",
    gitHub:"https://github.com/M-K4SH1F/Parking-Payment-Managment-System",
  },
  {
    num: '02',
    category: 'API',
    title: 'PatientCare RestAPI',
    description: 'PatientCare API is a RESTful API built with Node.js and Express.js for managing patient records. It supports creating, retrieving, updating, and deleting patient information, medical records, prescriptions, and insurance validity, ensuring efficient and comprehensive patient care management in a medical setting.',
    stack: [
      {name: "Node.js"},
      {name: "Java"},
      {name: "Next.js"}
    ],
    image: '/assets/work/PatientCare-API.jpg',
    live: "",
    gitHub:"https://github.com/M-K4SH1F/PatientCare-API",
  },
  {
    num: '03',
    category: 'Application',
    title: 'Anime Tracker',
    description: 'Anime tracker is a Flask-based web application which was built usying PYTHON. This web application allows users to create and maintain a list of their top 10 animes of all time. Users can add new animes, update their ratings and reviews, and delete animes from their list.',
    stack: [
      {name: "Python"},
      {name: "Html"},
      {name: "Css"},
      {name: "Flask"},
      {name: "SQLAlchemy"}
    ],
    image: '/assets/work/anime-tracker.png',
    live: "https://anime-tracker-phi.vercel.app/",
    gitHub:"https://github.com/M-K4SH1F/Anime-Tracker",
  },
  {
    num: '04',
    category: 'Frontend',
    title: '3D Animated Website',
    description: 'This project showcases a creative and reactive 3D animated website of Hotel Boutique built using HTML, CSS, and JavaScript.',
    stack: [
      {name: "Html 5"},
      {name: "Css 3"},
      {name: "Javascript"},
      {name: "Next.js"}
    ],
    image: '/assets/work/3D-animated-website.png',
    live: "https://3-d-animated-website-pi.vercel.app/",
    gitHub:"https://github.com/M-K4SH1F/3D-Animated-Website",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"},}}
    className="min-h-[80ch] flex flex-col justify-center py-12 xl:px-0"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/**outline number */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>

            {/**project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>

            {/**project description */}
            <p className="text-white/60">{project.description}</p>

            {/**stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index)=> {
                return (
                  <li key={index} className="text-xl text-accent-hover">
                    {item.name}
                    {/**removal of the end comma */}
                    {index !== project.stack.length -1 && ","}
                  </li>
                );
              })}
            </ul>

            {/** border */}
            <div className="border border-white/20"></div>

            {/**buttons */}
            <div className="flex items-center gap-4">
              {/**live projects button*/}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              {/**github projects button*/}
              <Link href={project.gitHub}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>

          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index)=>{
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/**overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>

                    {/** image*/}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt=""/>
                    </div>

                  </div>
                </SwiperSlide>
              );
            }
            )}
            
            {/** slider buttons */}
            <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />

          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Work;