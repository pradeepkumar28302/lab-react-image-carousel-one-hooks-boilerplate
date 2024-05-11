import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [index,setIndex]=useState(0)
    const {title,subtitle,img}=images[index];

    const next=()=>{
        setIndex(index===images.length-1?0:index+1);
    };

    const prev=()=>{
        setIndex(index===0?images.length-1:index-1);
    };

    return (
        <div className="cards flex">
            <div onClick={prev} className="left-arrow arrow flex">
                <ArrowBackIosIcon />
            </div>
            <h2 className="title">{title}</h2>
            <img className="image" src={img} alt="" />
            <h4 className="caption">{subtitle}</h4>
            <div onClick={next} className="right-arrow arrow flex">
                <ArrowForwardIosIcon />
            </div>
        </div>
    );
}

export default Carousel;