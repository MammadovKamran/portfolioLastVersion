import React,{ useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import style from "./home.module.css";

const Home = ({data}) => {

console.log(data);
  return (
    <div className={style.home_container}>
      <div className={style.home_text}>
        <h3>
          {data.name} <span className={style.home_text_surname}>{data.surname}</span>
        </h3>
        <h3>
          <span>{data.specialty1}</span> {data.specialty2}
        </h3>
        <Link to="/contactMe">
          <Button className={style.home_button}>Get in Touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
