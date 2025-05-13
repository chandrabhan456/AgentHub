import React, { useEffect, useRef, useState } from 'react';
import './Documentation.css';

const topics = [
  { id: 'intro', title: '1. Introduction to GDPR' },
  { id: 'principles', title: '2. Key Principles' },
  { id: 'rights', title: '3. Rights of Data Subjects' },
  { id: 'controllers', title: '4. Responsibilities of Data Controllers' },
  { id: 'processors', title: '5. Role of Data Processors' },
  { id: 'security', title: '6. Data Security and Breach' },
  { id: 'fines', title: '7. Fines and Penalties' },
];

function Documentation() {
  const [activeId, setActiveId] = useState('intro');
  const contentRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(contentRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = id => {
    contentRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="container1 mt-10">
        <p className='text-4xl font-bold '>GDPR Agent</p>
       <div className="button-group mt-5">
  <button>Compliance</button>
  <button>Data Protection</button>
  <button>Privacy Officer</button>
  <button>Regulation</button>
</div>

        <div className="nav">
          <a href="#">
            <img
              src="https://img.icons8.com/ios-filled/16/000000/document.png"
              alt="Document Icon"
            />
            Documentation
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/ios-filled/16/000000/info.png"
              alt="Info Icon"
            />
            Information
          </a>
         <a href="#">
  <img
    src="https://img.icons8.com/ios-filled/16/000000/frontend.png"
   
  />
  Front-end
</a>
<a href="#">
  <img
    src="https://img.icons8.com/ios-filled/16/000000/backend.png"
    
  />
  Back-end
</a>


        </div>
      </div>
      <div className='flex'>
        {/* Left: Documentation Content */}
        <div className="w-[70%] p-6 overflow-y-scroll" style={{ height: '600px' }}>
          {topics.map(({ id, title }) => (
            <div
              key={id}
              id={id}
              ref={el => (contentRefs.current[id] = el)}
              className="mb-12 scroll-mt-20"
            >
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {generateDummyContent(id)}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Topics List */}
        <div className="w-[30%] p-6 border-l overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4">Topics</h3>
          <ul>
            {topics.map(topic => (
              <li
                key={topic.id}
                className={`cursor-pointer mb-3 px-2 py-1 rounded ${
                  activeId === topic.id ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600'
                }`}
                onClick={() => scrollToSection(topic.id)}
              >
                {topic.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function generateDummyContent(topicId) {
  switch (topicId) {
    case 'intro':
      return 'The General Data Protection Regulation (GDPR) is a legal framework that sets guidelines for the collection and processing of personal data of individuals within the European Union (EU). It aims to give control to individuals over their personal data and simplify the regulatory environment.';
    case 'principles':
      return 'GDPR is founded on key principles: lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, confidentiality, and accountability.';
    case 'rights':
      return 'Individuals have rights including access, rectification, erasure (right to be forgotten), restriction of processing, data portability, objection, and rights regarding automated decision making and profiling.';
    case 'controllers':
      return 'Data controllers determine the purposes and means of processing personal data. They must ensure GDPR compliance, maintain documentation, and conduct Data Protection Impact Assessments (DPIAs) when required.';
    case 'processors':
      return 'Processors handle data on behalf of controllers. They must ensure data security, assist controllers in meeting obligations, and can be held liable for non-compliance under GDPR.';
    case 'security':
      return 'Organizations must implement technical and organizational measures to ensure data security. Breaches must be reported within 72 hours to supervisory authorities and, in some cases, to the data subjects.';
    case 'fines':
      return 'GDPR imposes two levels of fines: up to €10 million or 2% of annual global turnover, and up to €20 million or 4% of annual global turnover, depending on the severity of the violation.';
    default:
      return 'Content coming soon...';
  }
}

export default Documentation;
