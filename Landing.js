import "./Landing.css";
import "../responsive.css";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Landing() {
  return (
    <div className="landing-container" id="home-sec">
      <motion.div
        className="landing-img"
        animate={{
          rotate: [0, -50, 70, 0],
          y: [400, 390, 480, 500],
          x: [100, 200, 300, 400, 500, 600, 700, 800],
          scale: [1.5, 0.7, 0.5, 1.3]
        }}
        transition={{
          duration: 40,
          type: "tween",
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      ></motion.div>
      <motion.div
        className="landing-img-mobile"
        animate={{
          rotate: [0, -50, 70, 0],
          y: [-20, 20, -60],
          x: [50, 100],
          scale: [0.6, 0.3]
        }}
        transition={{
          duration: 40,
          type: "tween",
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      ></motion.div>
      <motion.div
        initial={{ filter: "brightness(1) grayScale(0.8) " }}
        animate={{
          filter: "brightness(1.5) grayScale(0.5)"
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse"
        }}
        className="landing-img-2"
      ></motion.div>
      <motion.img
        initial={{ y: -400 }}
        whileInView={{
          scale: [1.5, 0.7, 0.4],
          rotate: [0, 360, 720, 950, 1200],
          x: [100, 200, 300],
          y: [-400, -600],
          transition: {
            duration: 30,
            repeat: Infinity,
            type: "tween",
            repeatType: "reverse",
            ease: "linear"
          }
        }}
        src="./meteor-3.png"
        id="meteor"
      />

      <motion.div
        className="landing-text"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: 1,

          transition: {
            duration: 3
          }
        }}
      >
        <Typewriter
          onInit={(typeWriter) => {
            typeWriter
              .typeString(
                `<h1>
           Hello, this is Armaghan Mardasi
        </h1>
        <h3>Front-end developer</h3>`
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                `<h1>
          Hello, this is Armaghan Mardasi
        </h1>
        <h3>Front-end developer</h3>`
              )
              .start()
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                `<h1>
          Hello, this is Armaghan Mardasi
        </h1>
        <h3>Front-end developer</h3>`
              )
              .start();
          }}
        />
      </motion.div>
    </div>
  );
}
