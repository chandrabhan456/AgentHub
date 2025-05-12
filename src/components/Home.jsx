import React, { useState, useEffect } from "react";
import "./Home.css";
import { useStateContext } from "../contexts/ContextProvider";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
const steps = [
  "Select Cloud Provider",
  "Open-AI",
  "Document-Intelligence",
  "Storage Account",
];
const Home = () => {
  const {
    setSidebarCurrentStep,
    formDataStorage,
    setFormDataStorage,
    formDataDI,
    setFormDataDI,
    formDataOpenAI,
    setFormDataOpenAI,
  } = useStateContext();
  
 
  return (
    <div className="min-h-screen w-full bg-white text-black main-content  relative">
    
    </div>
  );
};

export default Home;
