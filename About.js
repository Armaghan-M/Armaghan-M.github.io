import "./About.css";
import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      whileInView={{
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror"
        }
      }}
      className="about-container"
      id="about-sec"
    >
      <motion.img
        whileInView={{
          y: [-60, 0],
          rotateX: 15,
          transition: { delay: 1, duration: 12, type: "spring", damping: 3 },
          x: 0
        }}
        src="./planet-4.png"
        alt="profile"
      />
      <motion.p
        whileInView={{
          scale: [0.5, 1],
          rotate: [0, 20, 0],
          transition: { duration: 0.7, type: "tween", repeatType: "reverse" }
        }}
      >
        As a passionate and motivated front-end developer, I am dedicated to
        creating intuitive and visually appealing web experiences. With a strong
        foundation in HTML, CSS, and JavaScript, I am eager to contribute my
        skills to innovative projects and collaborate with talented teams. I am
        enthusiastic about tackling new challenges, solving problems
        efficiently, and delivering high-quality code that exceeds expectations
        using the technologies below 👇
      </motion.p>
    </motion.div>
  );
}
