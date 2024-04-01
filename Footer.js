import "./Footer.css";
import "../responsive.css";
import React from "react";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaIdCard } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <div id="footer-container">
      <div id="footer-animation">
        {" "}
        <motion.img
          id="spaceship"
          whileInView={{
            y: [80, 100],
            x: [-300, -120],
            scale: [0, 0.5, 0.8, 1],

            transition: {
              repeat: 1,
              repeatType: "reverse",
              type: "spring",
              damping: 6,
              delay: 2
            }
          }}
          src="./spaceship-2.png"
        />
        <motion.img
          id="spaceship-mobile"
          whileInView={{
            y: [20, 40],
            x: [-30, -10],
            scale: [0, 0.2, 0.4, 0.7, 1],

            transition: {
              repeat: 1,
              repeatType: "reverse",
              type: "spring",
              damping: 6,
              delay: 2
            }
          }}
          src="./spaceship-2.png"
        />
      </div>
      <motion.ul
        whileInView={{
          y: [-100, -20],

          transition: {
            delay: 0.5,
            duration: 4,
            type: "spring",
            damping: 5
          }
        }}
        className="footer-info"
      >
        <li>
          <BsFillTelephoneFill />
          Tel : 0930 966 5106
        </li>
        <li>
          <IoMdMail />
          Gmail : armaghan.m.dev@gmail.com
        </li>
        <li>
          <BsGithub />
          <a href="https://github.com/Armaghan-M">Github : Armaghan-M</a>
        </li>

        <li>
          <FaIdCard />
          <a href="#">Click to download my CV</a>
        </li>
      </motion.ul>
    </div>
  );
}
