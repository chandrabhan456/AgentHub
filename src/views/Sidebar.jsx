import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "./Sidebar.css";
import gdprimg from "../data/gdpr.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import agentimg from "../data/Agent.png";
import MEMGPT from "../data/MEMGPT.png";
import CAG from "../data/CAG.png";
import PRESALES from "../data/presales.png";
const Sidebar = () => {
  console.log("SSS");
  const { gdpr, mainPage, documentation, configuration, home, selectedAgent } =
    useStateContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const buttonStyles = (path) => ({
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    backgroundColor: location.pathname === path ? "#0E61D1" : "#e9ecef",
    color: location.pathname === path ? "#fff" : "#333",
    cursor: "pointer",
    transition: "background-color 0.3s",
    border: "none",
    textAlign: "left",
    textDecoration: "none",
    fontSize: "1.25rem",
  });
  return (
    <div className=" w-80 p-4  mt-1">
      {/* Add your image here */}
      {mainPage && (
        <>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <img
              src={agentimg}
              alt="Agent Logo"
              style={{
                width: "75%",
                height: "145px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>

          <div
            className="ml-5"
            style={{ marginTop: "15px", textAlign: "left" }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              No Of Agent
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "normal",
                marginBottom: "10px",
              }}
            >
              5
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              Most Used
            </div>
            <div style={{ fontSize: "18px", fontWeight: "normal" }}>GDPR</div>
          </div>
        </>
      )}

      {selectedAgent === "gdpr" && (
        <div style={{ textAlign: "center" }}>
          <img
            src={gdprimg}
            alt="nttlogo"
            style={{
              width: "75%",
              height: "145px",
              display: "block",
              margin: "0 auto",
              border: "2px solid #d3d3d3", // Change this to customize your border
            }}
          />
        </div>
      )}
      {selectedAgent === "memgpt" && (
        <div style={{ textAlign: "center" }}>
          <img
            src={MEMGPT}
            alt="nttlogo"
            style={{
              width: "75%",
              height: "145px",
              display: "block",
              margin: "0 auto",
              border: "2px solid #d3d3d3", // Change this to customize your border
            }}
          />
        </div>
      )}
       {selectedAgent === "cag" && (
        <div style={{ textAlign: "center" }}>
          <img
            src={CAG}
            alt="nttlogo"
            style={{
              width: "75%",
              height: "145px",
              display: "block",
              margin: "0 auto",
              border: "2px solid #d3d3d3", // Change this to customize your border
            }}
          />
        </div>
      )}
       {selectedAgent === "presales" && (
        <div style={{ textAlign: "center" }}>
          <img
            src={PRESALES}
            alt="nttlogo"
            style={{
              width: "75%",
              height: "145px",
              display: "block",
              margin: "0 auto",
              border: "2px solid #d3d3d3", // Change this to customize your border
            }}
          />
        </div>
      )}
      {!mainPage && <p className="text-2xl mt-2 font-bold text-gray-500" style={{ textAlign: "center" }}>
  {selectedAgent.toUpperCase()} Agent
</p>}
      {selectedAgent === "gdpr" && home && (
        <nav
          style={{
            marginTop: "10px",
            backgroundColor: "#f8f9fa",
            padding: "6px",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              color: "#333",
              textAlign: "left",
            }}
          >
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/gdpr")}
                style={buttonStyles("/gdpr")}
              >
                🤖 GDPR Q&A
              </button>
            </li>
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/data-masking")}
                style={buttonStyles("/data-masking")}
              >
                🔒 Data Masking
              </button>
            </li>
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                className="whitespace-nowrap"
                onClick={() => handleNavigation("/rfp_compliance")}
                style={buttonStyles("/rfp_compliance")}
              >
                🔗 RFP Compliance Checker
              </button>
            </li>
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/rectification")}
                style={buttonStyles("/rectification")}
              >
                ✏️ Right to Rectification
              </button>
            </li>
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/compliance")}
                style={buttonStyles("/compliance")}
              >
                📬 Compliance & Queries
              </button>
            </li>
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/dsar")}
                style={buttonStyles("/dsar")}
              >
                🔍 DSAR
              </button>
            </li>
          </ul>
        </nav>
      )}
      {selectedAgent === "memgpt" && home && (
        <nav
          style={{
            marginTop: "10px",
            backgroundColor: "#f8f9fa",
            padding: "6px",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              color: "#333",
              textAlign: "left",
            }}
          >
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/memgpt")}
                style={buttonStyles("/memgpt")}
              >
                🤖 MEMGPT Q&A
              </button>
            </li>
         
          </ul>
        </nav>
      )}
       {selectedAgent === "cag" && home && (
        <nav
          style={{
            marginTop: "10px",
            backgroundColor: "#f8f9fa",
            padding: "6px",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              color: "#333",
              textAlign: "left",
            }}
          >
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/cag")}
                style={buttonStyles("/cag")}
              >
                🤖 CAG Q&A
              </button>
            </li>
           
          </ul>
        </nav>
      )}
          {selectedAgent === "presales" && home && (
        <nav
          style={{
            marginTop: "10px",
            backgroundColor: "#f8f9fa",
            padding: "6px",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              color: "#333",
              textAlign: "left",
            }}
          >
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/presales")}
                style={buttonStyles("/presales")}
              >
                🤖 RFP Understanding
              </button>
            </li>
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/proposal")}
                style={buttonStyles("/proposal")}
              >
              ✏️ Proposal Genration 
              </button>
            </li>
          </ul>
        </nav>
      )}
      {configuration && (
        <nav
          style={{
            marginTop: "10px",
            backgroundColor: "#f8f9fa",
            padding: "6px",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              color: "#333",
              textAlign: "left",
            }}
          >
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/admin")}
                style={buttonStyles("/admin")}
              >
                🧑‍⚖️ Admin
              </button>
            </li>
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                onClick={() => handleNavigation("/registration")}
                style={buttonStyles("/registration")}
              >
                ➕👤  New User
              </button>
            </li>
            <li style={{ fontSize: "1.25rem", margin: "8px 0" }}>
              <button
                className="whitespace-nowrap"
                onClick={() => handleNavigation("/password_change")}
                style={buttonStyles("/password_change")}
              >
                🔑 Password Change
              </button>
            </li>
          </ul>
        </nav>
      )}

      {documentation && (
        <div>
          <div
            className="ml-5"
            style={{ marginTop: "15px", textAlign: "left" }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              Version
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "normal",
                marginTop: "5px",
              }}
            >
              1.0
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Last Updated
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "normal",
                marginTop: "5px",
              }}
            >
              May-2025
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
