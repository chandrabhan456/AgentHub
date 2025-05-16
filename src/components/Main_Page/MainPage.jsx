import React, { useState } from "react";
import "./MainPage.css";
import "./container.css";

import avatar from "../../data/gdpr.jpg";
import CAG from "../../data/CAG.png";
import MEMGPT from "../../data/MEMGPT.png";
import Agile from "../../data/Agile.png";
import agentimg from "../../data/Agent.png";
import { useNavigate } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useStateContext } from "../../contexts/ContextProvider";
const Container = ({ logo, name, description, tags, url }) => {
  return (
    <div
      className="container"
      style={{ cursor: "pointer" }} // Indicate clickable containers
    >
      <div className="container-content">
        <div className="header">
          <img src={logo} alt={`${name} logo`} className="h-16 w-30" />
          <h3 className="name">{name}</h3>
        </div>
        <p className="description text-left m-0">{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="tag1">
         {name === "GDPR" || name === "MEMGPT" || name === "CAG" ? (
  <span className="bg-white border border-[#007BFF] rounded-md px-2 py-1 mt-2 text-xs ml-[2%] w-full max-w-[60px] text-center text-[#007bff]">Demo</span>

    ) : (
      <span className="bg-white border border-gray-300 rounded-md px-2 py-1 mt-2 text-xs ml-[2%] w-full max-w-[92px] text-center text-gray-400">Coming Soon</span>

    )}
        </div>
      </div>
    </div>
  );
};

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [InputText, setInputText] = useState("");
  const navigate = useNavigate();
  const { setSelectedAgent, setGdpr, setMainPage, setHome } = useStateContext();

  const handleNavigation = (path) => {
    setMainPage(false);
   
    if (path === "/gdpr") {
      setSelectedAgent("gdpr");
      setGdpr(true);
      setHome(true);
    }
    if (path === "/memgpt") {
      setSelectedAgent("memgpt");
      setGdpr(true);
      setHome(true);
    }
     if (path === "/cag") {
      setSelectedAgent("cag");
      setGdpr(true);
      setHome(true);
    }
    else{
      setMainPage(true)
    }
    navigate(path);
  };
  const data = [
    {
      logo: avatar,
      name: "GDPR",
      description:
        " GDPR Agent is a tool that helps organizations manage and ensure compliance with the EU's General Data Protection Regulation.",
      tags: ["Agent", "1.0", "Data Protection"],
      path: "/gdpr",
    },
    {
      logo: MEMGPT,
      name: "MEMGPT",
      description:
        "MEMGPT Agent is an AI tool designed to enhance memory management, improving information retention and recall efficiency in applications.",
      tags: ["Agent", "1.0", "Information Retention"],
      path: "/memgpt",
    },
    {
      logo: CAG,
      name: "CAG",
      description:
        "CAG, or Controller and Auditor-General, oversees government spending and audits public sector accounts to ensure transparency and accountability.",
      tags: ["Agent", "1.0", "Public Audit"],
      path: "/cag",
    },
    {
      logo: Agile,
      name: "Agile Agent",
      description:
        "An agile agent rapidly adapts to changes, prioritizes collaboration, delivers iterative value, and continuously improves processes in dynamic environments.",
      tags: ["Agent", "1.0", "Collaboration"],
      path:"/Agile"
    },
    {
      logo: agentimg,
      name: "Agent5",
      description:
        "CAG, or Controller and Auditor-General, oversees government spending and audits public sector accounts to ensure transparency and accountability.",
      tags: ["Agent", "1.0", "Public Audit"],
      path: "/agent5",
    },
  ];

  const ordersData3 = data;
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
    console.log("Vidhi", e.target.value.toLowerCase());
  };
  const records1 = ordersData3.filter((el) => {
    if (el === "") {
      return el;
    } else {
      return (
        el.name.toLowerCase().includes(InputText) ||
        el.description.includes(InputText) ||
        el.tags.includes(InputText)
      );
    }
  });
  const records = records1.slice(firstIndex, lastIndex);
  return (
    <div className="h-screen bg-white mt-0 w-full">
      <div className=" items-center justify-center h-full">
        <div className="flex mt-16 gap-4 items-center">
          <div className="search-bar-container mt-2 h-12">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
              onChange={inputHandler}
            />
          </div>
          <div className="dropdown-container mt-2 h-10" >
            <select className="dropdown">
              <option value="">Select an option</option>
              <option value="option1">Latest</option>
              <option value="option2">Most Usoed</option>
              <option value="option3">Old</option>
            </select>
          </div>
        </div>

        <div className="main-page">
          <div className="container-grid">
            {records.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(item.path)}
                style={{ cursor: "pointer" }}
              >
                <Container
                  logo={item.logo}
                  name={item.name}
                  description={item.description}
                  tags={item.tags}
                />
              </div>
            ))}
          </div>

          <div className="flex pagination gap-3" style={{ marginLeft: "15%" }}>
            <div className=" mt-5">
              <a href="#" className="text-blue-400" onClick={prePage}>
                <HiOutlineChevronLeft />
              </a>
            </div>
            <p className="mt-5">1</p>
            <div className=" mt-5">
              <a href="#" className="text-blue-400" onClick={nextPage}>
                <HiOutlineChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function prePage() {
    if (currentPage != firstIndex + 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (ordersData3.length > lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default MainPage;
