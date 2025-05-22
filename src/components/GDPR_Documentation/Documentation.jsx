import React, { useEffect, useRef, useState } from "react";
import "./Documentation.css";
import { useStateContext } from "../../contexts/ContextProvider";
const gdprTopics = [
  { id: "intro", title: "1. Introduction to GDPR" },
  { id: "principles", title: "2. Key Principles" },
  { id: "rights", title: "3. Rights of Data Subjects" },
  { id: "controllers", title: "4. Responsibilities of Data Controllers" },
  { id: "processors", title: "5. Role of Data Processors" },
  { id: "security", title: "6. Data Security and Breach" },
  { id: "fines", title: "7. Fines and Penalties" },
];

const memgptTopics = [
  { id: "overview", title: "1. Overview of MEMGPT" },
  { id: "architecture", title: "2. Architecture" },
  { id: "applications", title: "3. Applications" },
  { id: "benefits", title: "4. Benefits" },
  { id: "limitations", title: "5. Limitations" },
];

const gdprButtonLabels = [
  "Compliance",
  "Data Protection",
  "Privacy Officer",
  "Regulation",
];
const memgptButtonLabels = [
  "AI Models",
  "Machine Learning",
  "Neural Networks",
  "Innovation",
];
const cagAgentTopics = [
  { id: "introduction", title: "1. Introduction to CAG Agent" },
  { id: "components", title: "2. Core Components" },
  { id: "useCases", title: "3. Use Cases" },
  { id: "advantages", title: "4. Advantages" },
  { id: "challenges", title: "5. Challenges" },
];

const cagAgentButtonLabels = [
  "Automation",
  "Data Processing",
  "Integration",
  "Scalability",
];
const Documentation = () => {
  const [activeId, setActiveId] = useState("");
  const { selectedAgent } = useStateContext();
  const [readme, setReadme] = useState(true);
  const [backend, setBackend] = useState(false);
  const [storage1, setStorage1] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const handleDocumentationClick = () => {
    setReadme(true);
    setBackend(false);
    setStorage1(false);
    setFrontend(false);
  };
  const handleBackendClick = () => {
    setReadme(false);
    setBackend(true);
    setStorage1(false);
    setFrontend(false);
  };
  const handleStorageClick = () => {
    setReadme(false);
    setBackend(false);
    setStorage1(true);
    setFrontend(false);
  };
  const handleFrontendClick = () => {
    setReadme(false);
    setBackend(false);
    setStorage1(false);
    setFrontend(true);
  };
     const agentName = selectedAgent === "gdpr" 
  ? "GDPR Agent" 
  : selectedAgent === "memgpt" 
  ? "MEMGPT Agent" 
  : "CAG Agent";

console.log(agentName); // This will log the agent name based on the selected agent

  const contentRefs = useRef({});

 
const topics = selectedAgent === "gdpr" ? gdprTopics 
               : selectedAgent === "memgpt" ? memgptTopics 
               : cagAgentTopics;

const buttonLabels = selectedAgent === "gdpr" ? gdprButtonLabels 
                     : selectedAgent === "memgpt" ? memgptButtonLabels 
                     : cagAgentButtonLabels;


  useEffect(() => {
    setActiveId(topics[0]?.id || "");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(contentRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [topics]);

  const scrollToSection = (id) => {
    contentRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const generateContent = (topicId) => {
  if (selectedAgent === "gdpr") {
  switch (topicId) {
    case "intro":
      return "The General Data Protection Regulation (GDPR) is a legal framework established by the European Union to protect personal data and privacy of individuals within the EU. It was enacted on May 25, 2018, and applies to all companies processing the personal data of individuals residing in the EU, regardless of the company's location.";

    case "principles":
      return "GDPR is founded on key principles: \n1. **Lawfulness, Fairness, and Transparency:** Personal data must be processed lawfully, fairly, and in a transparent manner.\n2. **Purpose Limitation:** Data should be collected for specified, explicit, and legitimate purposes and not further processed in a manner that is incompatible with those purposes.\n3. **Data Minimization:** Only data that is necessary for the purposes should be collected and processed.\n4. **Accuracy:** Personal data should be accurate and kept up to date.\n5. **Storage Limitation:** Data should be kept in a form that permits identification of data subjects for no longer than necessary.\n6. **Integrity and Confidentiality:** Data must be processed in a manner that ensures appropriate security.\n7. **Accountability:** The data controller is responsible for ensuring compliance with the principles.";

    case "rights":
      return "Individuals have several rights under the GDPR, including:\n1. **Right to Access:** Individuals can request access to their personal data.\n2. **Right to Rectification:** Individuals can request corrections to their personal data.\n3. **Right to Erasure ('Right to be Forgotten')**: Individuals can request deletion of their personal data under certain circumstances.\n4. **Right to Restrict Processing:** Individuals can request the restriction of processing under certain conditions.\n5. **Right to Data Portability:** Individuals can request to receive their personal data in a structured, commonly used, and machine-readable format.\n6. **Right to Object:** Individuals can object to processing based on legitimate interests or direct marketing.\n7. **Rights related to Automated Decision-Making:** Individuals have rights concerning automated decision-making and profiling.";

    case "controllers":
      return "Data controllers are entities that determine the purposes and means of processing personal data. They are responsible for complying with GDPR requirements, ensuring data protection principles are met, and handling data subject rights requests.";

    case "processors":
      return "Processors handle personal data on behalf of controllers. They must act on the instructions of the controller and implement appropriate technical and organizational measures to ensure data protection. Processors are also required to maintain records of processing activities and report data breaches to controllers.";

    case "security":
      return "Organizations must implement technical and organizational measures to ensure a level of security appropriate to the risk. This includes protecting data against unauthorized processing, accidental loss, destruction, or damage. Measures such as encryption, access controls, and regular testing of security systems are recommended.";

    case "fines":
      return "GDPR imposes two levels of fines for non-compliance: \n1. Up to €10 million or 2% of the annual worldwide turnover of the preceding financial year, whichever is higher, for infringements related to record-keeping, security, and data protection impact assessments.\n2. Up to €20 million or 4% of the annual worldwide turnover, whichever is higher, for more serious infringements such as violations of data subjects' rights and transfers of personal data to third countries without adequate safeguards.";

    default:
      return "Content coming soon...";
  }


    } else if (selectedAgent === "memgpt") {
  switch (topicId) {
    case "overview":
      return "MEMGPT is a powerful AI model designed to process and understand human language with unprecedented accuracy and efficiency. Leveraging the capabilities of deep learning, MEMGPT can generate contextually relevant text, perform complex language tasks, and assist in a variety of applications ranging from customer service to content creation.";

    case "architecture":
      return "The architecture of MEMGPT is based on advanced neural networks, specifically transformer models. These models are characterized by their ability to handle large amounts of data and learn complex patterns through self-attention mechanisms. MEMGPT's architecture allows it to analyze context deeply and generate human-like responses that are coherent and contextually appropriate.";

    case "applications":
      return "MEMGPT has applications in various fields, including:\n1. **Language Processing:** Enhancing natural language understanding and generation.\n2. **Customer Support:** Automating responses and assisting human agents.\n3. **Content Creation:** Generating articles, blogs, and creative writing.\n4. **Education:** Providing personalized learning experiences and tutoring.\n5. **Research:** Assisting in data analysis and summarization.";

    case "benefits":
      return "The benefits of MEMGPT include improved accuracy and efficiency in language processing tasks. It enables faster content generation, enhances customer interactions, and provides intelligent insights through data analysis. Its ability to understand and generate nuanced language makes it a versatile tool for both businesses and individuals.";

    case "limitations":
      return "Despite its strengths, MEMGPT has limitations such as:\n1. **Bias:** Like many AI models, MEMGPT can inherit biases present in its training data.\n2. **Context Understanding:** While advanced, MEMGPT may still struggle with complex or ambiguous contexts.\n3. **Resource Intensive:** Running MEMGPT requires significant computational resources.\n4. **Dependence on Data Quality:** The model's performance heavily relies on the quality of the data it was trained on.";

    default:
      return "Content coming soon...";
  }


  } else if (selectedAgent === "cag") {
    switch (topicId) {
      case "introduction":
        return "CAG Agent is a comprehensive solution for automating complex workflows...";
      case "components":
        return "The core components of CAG Agent include a robust processing engine...";
      case "useCases":
        return "CAG Agent can be utilized in numerous scenarios such as data integration...";
      case "advantages":
        return "Key advantages of CAG Agent include scalability, flexibility, and speed...";
      case "challenges":
        return "Challenges faced by CAG Agent include integration complexity and maintenance...";
      default:
        return "Content coming soon...";
    }
  }
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="container1 mt-10">
        <p className="text-4xl font-bold ">
        {agentName}
        </p>
        <div className="button-group mt-5">
          {buttonLabels.map((label, index) => (
            <button key={index}>{label}</button>
          ))}
        </div>
        <div className="nav gap-4">
          <span
            className={`cursor-pointer ${readme ? "text-blue-400" : ""}`}
            onClick={handleDocumentationClick}
          >
            📄 Readme
          </span>

          <span
            className={`cursor-pointer ${frontend ? "text-blue-400" : ""}`}
            onClick={handleFrontendClick}
          >
            🖥️ Front-end
          </span>
          <span
            className={`cursor-pointer ${backend ? "text-blue-400" : ""}`}
            onClick={handleBackendClick}
          >
            🗄️ Back-end
          </span>
          <span
            className={`cursor-pointer ${storage1 ? "text-blue-400" : ""}`}
            onClick={handleStorageClick}
          >
            💾 Storage
          </span>
        </div>
      </div>
      {readme && (
        <div className="flex mt-10">
          <div
            className="w-[70%] p-6 overflow-y-scroll"
            style={{ height: "600px" }}
          >
            {topics.map(({ id, title }) => (
              <div
                key={id}
                id={id}
                ref={(el) => (contentRefs.current[id] = el)}
                className="mb-12 scroll-mt-20"
              >
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {generateContent(id)}
                </p>
              </div>
            ))}
          </div>
          <div className="w-[30%] p-6 border-l overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Topics</h3>
            <ul>
              {topics.map((topic) => (
                <li
                  key={topic.id}
                  className={`cursor-pointer mb-3 px-2 py-1 rounded ${
                    activeId === topic.id
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "text-gray-600"
                  }`}
                  onClick={() => scrollToSection(topic.id)}
                >
                  {topic.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {backend && (
        <>
          <div class="flex items-center border-b py-4 ml-10 mt-10">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-18 h-14 bg-black border-r-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-18 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8H6a2 2 0 01-2-2V6a2 2 0 012-2h8l4 4v10a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-lg font-semibold">Python==13.1.0</p>
              <p class="text-gray-500">Python==13.1.0</p>
            </div>
          </div>

          <div class="flex items-center border-b py-4 ml-10">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-18 h-14 bg-black border-b-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-18 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8H6a2 2 0 01-2-2V6a2 2 0 012-2h8l4 4v10a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-lg font-semibold">Flask==2.3.3</p>
              <p class="text-gray-500">Flask==2.3.3</p>
            </div>
          </div>
          <div class="flex items-center border-b py-4 ml-10">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-18 h-14 bg-black border-b-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-18 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8H6a2 2 0 01-2-2V6a2 2 0 012-2h8l4 4v10a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-lg font-semibold">Transformer==4.34.0</p>
              <p class="text-gray-500">Transformer==4.34.0</p>
            </div>
          </div>
          <div class="flex items-center border-b py-4 ml-10">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-18 h-14 bg-black border-b-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-18 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8H6a2 2 0 01-2-2V6a2 2 0 012-2h8l4 4v10a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-lg font-semibold">Langchain==0.0.300</p>
              <p class="text-gray-500">Langchain==0.0.300</p>
            </div>
          </div>
        </>
      )}
      {storage1 && (
        <>
          <div className="flex witems-center border-b border-gray-300 p-4 rounded shadow-sm ml-10 mt-10">
            <div className="mr-4">
              <div
                className="w-10 h-10 bg-gray-300 rounded"
                style={{
                  backgroundImage:
                    "url('https://www.sqlite.org/images/sqlite370_banner.gif')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">SQLite Storage</h3>
              <p className="text-sm text-gray-600" style={{ maxWidth: "90%" }}>
                SQLite is a software library that provides a relational database
                management system. It is self-contained, serverless, and
                requires minimal configuration, making it ideal for embedded
                applications and small-scale storage solutions.
              </p>
            </div>
          </div>
        </>
      )}
      {frontend && (
        <>
          <div className="flex items-center border-b border-gray-300 p-4 rounded shadow-sm ml-10 mt-10">
            <div className="mr-4">
              <div
                className="w-14 h-12 bg-white rounded"
                style={{
                  backgroundImage:
                    "url('https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg')", // React icon URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">React</h3>
              <p className="text-sm text-gray-600" style={{ maxWidth: "100%" }}>
                React is a JavaScript library for building user interfaces. It
                allows developers to create large web applications that can
                update and render efficiently in response to data changes.
              </p>
            </div>
          </div>
          <div className="flex items-center border-b border-gray-300 p-4 rounded shadow-sm ml-12 mt-4">
            <div className="mr-5">
              <div
                className="w-10 h-10 bg-white rounded"
                style={{
                  backgroundImage:
                    "url('https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg')", // Tailwind CSS icon URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="">
              <h3 className="text-lg font-bold mb-1">Tailwind CSS</h3>
              <p className="text-sm text-gray-600" style={{ maxWidth: "100%" }}>
                Tailwind CSS is a utility-first CSS framework for rapidly
                building custom designs. It provides low-level utility classes
                that can be composed to build complex user interfaces directly
                in your markup.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Documentation;
