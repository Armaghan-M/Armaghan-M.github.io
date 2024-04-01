import * as React from "react";
import ImgModal from "../ImgModal/ImgModal";
import "./ImgList.css";
import "../responsive.css";


export default function ImgList() {
  const scaleHandler = (event) => {
    event.target.classList.toggle("scaleUp");
  };
  return (
    <div id="gallery-container">
      <ImgModal />
      <div id="img-list-title">| My Projects |</div>
      <div id="gallery">
        {itemData.map((item) => (
          <img
            key={item.id}
            srcSet={`${item.img}`}
            src={`${item.img}`}
            loading="lazy"
            onClick={scaleHandler}
          />
        ))}
      </div>
    </div>
  );
}

const itemData = [
  { id: Math.random(), img: "./p-1.png" },
  { id: Math.random(), img: "./p-2.png" },
  { id: Math.random(), img: "./p-3.png" },
  { id: Math.random(), img: "./p-4.png" },
  { id: Math.random(), img: "./p-5.png" },
  {
    id: Math.random(),
    img: "./p-6.png"
  },
  {
    id: Math.random(),
    img: "./p-7.png"
  },
  {
    id: Math.random(),
    img: "./p-8.png"
  },
  {
    id: Math.random(),
    img: "./p-9.png"
  },
  {
    id: Math.random(),
    img: "./p-10.png"
  },
  {
    id: Math.random(),
    img: "./p-11.png"
  },
  {
    id: Math.random(),
    img: "./p-12.png"
  },
  {
    id: Math.random(),
    img: "./p-13.png"
  },
  {
    id: Math.random(),
    img: "./p-14.png"
  },
  {
    id: Math.random(),
    img: "./p-15.png"
  }
];
