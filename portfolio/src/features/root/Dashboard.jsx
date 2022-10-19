import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../components/aboutMe/AboutMe";
import ContactMe from "../components/contactMe/ContactMe";
import Home from "../components/homePage/Home";
import MyProjects from "../components/projects/MyProjects";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/myData")
      .then((response) => response.json())
      .then((myData) => setData(myData));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/aboutMe" element={<AboutMe data={data} />} />
        <Route path="/contactMe" element={<ContactMe data={data} />} />
        <Route path="/myProjects" element={<MyProjects data={data} />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
