"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaJira,
  FaGit,
  FaPython,
  FaFigma,
  FaFlask
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about data
const about = {
  title: "About Me",
  description: "A passionate Software Developer and Graphic Designer with a keen eye for innovation and creativity, dedicated to building exceptional digital experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohammed Kashif Ahmed",
    },
    {
      fieldName: "Email",
      fieldValue: "mkahmed2004@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Work Availaibility",
      fieldValue: "Open to work",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu, Hindi, Arabic, French",
    },
  ]
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Highlighting my diverse professional journey with hands-on experience in web development, graphic design, and data analysis across various industries.",
  items: [
    {
      company: "UNB Robotics Club",
      position: "Software Director",
      duration: "September 2024 - present",
    },
    {
      company: "UNB Delegations",
      position: "Graphic Designer Director",
      duration: "September 2023 - April 2024",
    },
    {
      company: "University of New Brunswick",
      position: "Contract Based Web Developer",
      duration: "April 2024 - May 2024",
    },
    {
      company: "Catalyst Group",
      position: "Data Analyst Intern",
      duration: "June 2022 - October 2022",
    },
  ]
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Describing my academic achievements and the knowledge gained from institutions attended.",
  items: [
    {
      institution: "University of New Brunswick",
      location: "New Brunswick, Canada",
      degree: "Bachelors of Science in Software Engineering",
      duration: "January 2023 - April 2027",
    },
    {
      institution: "International Indian School Dammam",
      location: "Dammam, Saudi Arabia",
      degree: "High School Diploma of Computer Science",
      duration: "April 2018 - June 2022",
    },
  ]
};

// skills data
const skills = {
  title: "My Skills",
  description: "Showcasing my proficiency in a diverse array of programming languages, frameworks, and design tools to deliver exceptional results.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaJs />,
      name: "Java Script",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },{
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaJira />,
      name: "Jira",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaFlask />,
      name: "Flask",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; 

import { ScrollArea } from '@/components/ui/scroll-area';
import { delay, motion } from 'framer-motion';


const Resume = () => {
  return <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}}
    className="
      min-h-[80vh] flex items-center justify-center py-12 xl:py-0
    "
  >
    <div className="container mx-auto">
      <Tabs defaulValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>

        {/** content */}
        <div className="min-h-[70ch] w-full">
          {/**experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=> {
                    return (
                      <li key={index} className="bg-[#606C38] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-hover">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/**dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>     
              </ScrollArea>
            </div>
          </TabsContent>

          {/**education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                  {education.items.map((item, index)=> {
                    return (
                      <li key={index} className="bg-[#606C38] h-[354px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent-hover">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-5">
                          {/**dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                        <p className="text-[#FEFAE0]">{item.location}</p>
                      </li>
                    );
                  })}
                </ul>     
              </ScrollArea>
            </div>
          </TabsContent>

          {/**skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index)=>{
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#606C38] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>

          {/**about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index)=> {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-xl text-[#fefae088]">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;