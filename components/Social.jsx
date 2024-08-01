import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/M-K4SH1F" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mohammed-kashif-ahmed-77b2b9209/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/m_k4sh1f/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
