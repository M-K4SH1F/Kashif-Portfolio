"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "I specialize in creating scalable, and secure web applications tailored to meet your business needs. From responsive design to robust back-end systems, I deliver top-notch web solutions.",
    href: "https://github.com/M-K4SH1F/3D-Animated-Website"
  },
  {
    num: "02",
    title: "API Development",
    desc: "My API development services ensure seamless integration and efficient data exchange across your applications. I build reliable and high-performance APIs that power your digital ecosystem.",
    href: "https://github.com/M-K4SH1F/PatientCare-API"
  },
  {
    num: "03",
    title: "AI Development",
    desc: "Harness the power of artificial intelligence with my AI development services. I design and implement intelligent systems that enhance decision-making, automate processes, and provide valuable insights.",
    href: "https://github.com/M-K4SH1F/Anime-Tracker"
  },
  {
    num: "04",
    title: "Graphic Design",
    desc: "My graphic design services bring your brand to life with visually stunning and impactful designs. From logos to marketing materials to poster designs, I create compelling visuals that captivate and engage your audience.",
    href: "https://drive.google.com/drive/folders/1-D2ke9hgTSBu0ZvSuurdtc3LiLgmfV6o"
  },
];

import { delay, motion } from 'framer-motion';

const Services = () => {
  return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div 
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index)=>{
          return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/**Tap */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center
                  hover:-rotate-45">
                    <BsArrowDownRight 
                      className="text-primary text-3xl"
                    />
                </Link>
              </div>
              {/**heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/**description */}
              <p className="text-white/60">
                {service.desc}
              </p>
              {/**border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
      </motion.div>

    </div>
  </section>;
};

export default Services;
