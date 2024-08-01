"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] "
        >
          <Image
            src="/assets/portfolio-photo.jpg"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full overflow-hidden"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-[350px] xl:w-[556px] h-[350px] xl:h-[556px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          fill="transparent"
          viewBox="0 0 556 556"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="278"
            cy="278"
            r="265"
            stroke="#FEFAE0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

      </motion.div>
    </div>
  );
};

export default Photo;
