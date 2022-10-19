import React, { useState } from "react";
import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import img from "../../assets/png/JavaScript-logo.png";
import style from "./myProjects.module.css";

const responsive = {
  0: { items: 0 },
  500: { items: 2 },
  900: { items: 3 },
};


const MyProjects = () => {
  const [gitData, setGitData] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((myData) => setGitData(myData));
  };

  useEffect(() => {
    fetchData();
  }, []);

 const gitItem =  gitData.map((item) => 
 
   (
    <div key={item} className="item" data-value={gitData.indexOf}>
    <a href={item.repoLink}>
      <img src={img} alt="" />
      <div className="itemBottom">
        <p style={{  color:" #62E1E9", fontWeight:500}}>{item.repoName}</p>
      </div>
    </a>
  </div>
   )
  );

  console.log(gitData.repoName);
  console.log(gitData);
  return (
    <div className={style.container}>
      <div className={style.myProjects__top}>
        <h3>
          My <span>Projects </span>
        </h3>
        <div className="border"></div>
        
      </div>
      <AliceCarousel
        style={{ color: "white" }}
        autoPlayInterval={1000}
        animationDuration={3000}
       
        infinite={true}
        autoPlay={true}
        keyboardNavigation
        items={gitItem}
        responsive={responsive}
      />
      {/* <AliceCarousel autoPlayInterval={2000} animationDuration={3000} disableButtonsControls={true} infinite={true} autoPlay={true} mouseTracking items={items} /> */}
    </div>
  );
};

export default MyProjects;
