import React from "react";
import { ImGit } from "react-icons/im";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiBootstrap,
  SiTailwindcss
} from "react-icons/si";
import { motion } from "framer-motion";
import "./Techs.css";
import "../responsive.css";

export default function Techs() {
  return (
    <div id="techs-main">
      <motion.div
        id="techs-container"
        initial={{ rotateX: -63, rotateZ: 25 }}
        whileInView={{
          rotate: [0, 360],
          skewY: [10, 0],
          opacity: [0.5, 0.8, 1],
          scale: [0.2, 0.5, 1],
          transition: {
            duration: 2,
            ease: "linear",
            type: "spring"
          }
        }}
      >
        <motion.span
          whileInView={{
            rotate: [0, 360],
            skewY: [10, 0],
            opacity: [0.5, 0.8, 1],
            scale: [0.2, 0.5, 1],
            transition: {
              duration: 3,
              ease: "anticipate",
              type: "spring",
              damping: 4
            }
          }}
        >
          <SiHtml5
            className="icon"
            style={{
              color: "#e34c26",
              fontSize: "4rem",
              boxShadow: "0.7rem 1.2rem 0.5rem #e34c26",
              border: "15px outset #344955",
              borderRadius: "2rem",
              padding: "0.5rem"
            }}
          />
          HTML5
        </motion.span>
        <motion.span
          whileInView={{
            rotate: [0, 360],
            skewY: [10, 0],
            opacity: [0.5, 0.8, 1],
            scale: [0.2, 0.5, 1],
            transition: {
              duration: 3,
              ease: "anticipate",
              type: "spring",
              damping: 5
            }
          }}
        >
          <SiCss3
            className="icon"
            style={{
              color: "#264de4",
              fontSize: "4rem",
              boxShadow: "0.7rem 1.2rem 0.5rem #264de4",
              border: "15px outset #344955",
              borderRadius: "2rem",
              padding: "0.5rem"
            }}
          />
          CSS3
        </motion.span>
        <motion.span
          whileInView={{
            rotate: [0, 360],
            skewY: [10, 0],
            opacity: [0.5, 0.8, 1],
            scale: [0.2, 0.5, 1],
            transition: {
              duration: 3,
              ease: "anticipate",
              type: "spring",
              damping: 5
            }
          }}
        >
          <SiBootstrap
            className="icon"
            style={{
              color: "#563d7c",
              fontSize: "4rem",
              boxShadow: "0.7rem 1.2rem 0.5rem #B643CD",
              border: "15px outset #344955",
              borderRadius: "2rem",
              padding: "0.5rem"
            }}
          />
          Bootstrap
        </motion.span>
        <motion.span
          whileInView={{
            rotate: [0, 360],
            skewY: [10, 0],
            opacity: [0.5, 0.8, 1],
            scale: [0.2, 0.5, 1],
            transition: {
              duration: 3,
              ease: "anticipate",
              type: "spring",
              damping: 6
            }
          }}
        >
          <SiTailwindcss
            className="icon"
            style={{
              color: "rgb(56, 189, 248)",
              fontSize: "4rem",
              boxShadow: "0.7rem 1.2rem 0.5rem rgb(56, 189, 248)",
              border: "15px outset #344955",
              borderRadius: "2rem",
              padding: "0.5rem"
            }}
          />
          Tailwind
        </motion.span>
        <motion.span
          whileInView={{
            rotate: [0, 360],
            skewY: [10, 0],
            opacity: [0.5, 0.8, 1],
            scale: [0.2, 0.5, 1],
            transition: {
              duration: 3,
              ease: "anticipate",
              type: "spring",
              damping: 4
            }
          }}
        >
          <SiJavascript
            className="icon"
            style={{
              color: "#f7df1e",
              backgroundColor: "#000",
              fontSize: "4rem",
              boxShadow: "0.7rem 1.2rem 0.5rem #f7df1e",
              border: "15px outset #344955",
              borderRadius: "2rem",
              padding: "0.5rem"
            }}
          />
          Javascript
        </motion.span>

        <motion.span
          whileInView={{
            rotate: [0, 360],
            skewY: [10, 0],
            opacity: [0.5, 0.8, 1],
            scale: [0.2, 0.5, 1],
            transition: {
              duration: 3,
              ease: "anticipate",
              type: "spring",
              damping: 3
            }
          }}
        >
          <SiRedux
            className="icon"
            style={{
              color: "#764abc",
              fontSize: "4rem",
              boxShadow: "0.7rem 1.2rem 0.5rem #9818D6",
              border: "15px outset #344955",
              borderRadius: "2rem",
              padding: "0.5rem"
            }}
          />
          Redux
        </motion.span>
        <motion.span
          whileInView={{
            rotate: [0, 360],
            skewY: [10, 0],
            opacity: [0.5, 0.8, 1],
            scale: [0.2, 0.5, 1],
            transition: {
              duration: 3,
              ease: "anticipate",
              type: "spring",
              damping: 5
            }
          }}
        >
          <SiReact
            className="icon"
            style={{
              color: "#61DBFB",
              fontSize: "4rem",
              boxShadow: "0.7rem 1.2rem 0.5rem #15F5BA",
              border: "15px outset #344955",
              borderRadius: "2rem",
              padding: "0.5rem"
            }}
          />
          React
        </motion.span>

        <motion.span
          whileInView={{
            rotate: [0, 360],
            skewY: [10, 0],
            opacity: [0.5, 0.8, 1],
            scale: [0.2, 0.5, 1],
            transition: {
              duration: 3,
              ease: "anticipate",
              type: "spring",
              damping: 5
            }
          }}
        >
          <ImGit
            className="icon"
            style={{
              color: "#f34f29",
              fontSize: "4rem",
              boxShadow: "0.7rem 1.2rem 0.5rem #FF5722",
              border: "15px outset #344955",
              borderRadius: "2rem",
              padding: "0.5rem"
            }}
          />
          git
        </motion.span>
      </motion.div>
    </div>
  );
}
