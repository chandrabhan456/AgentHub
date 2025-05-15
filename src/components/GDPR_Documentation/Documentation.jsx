import React, { useEffect, useRef, useState } from 'react';
import './Documentation.css';
import { useStateContext } from '../../contexts/ContextProvider';
const gdprTopics = [
  { id: 'intro', title: '1. Introduction to GDPR' },
  { id: 'principles', title: '2. Key Principles' },
  { id: 'rights', title: '3. Rights of Data Subjects' },
  { id: 'controllers', title: '4. Responsibilities of Data Controllers' },
  { id: 'processors', title: '5. Role of Data Processors' },
  { id: 'security', title: '6. Data Security and Breach' },
  { id: 'fines', title: '7. Fines and Penalties' },
];

const memgptTopics = [
  { id: 'overview', title: '1. Overview of MEMGPT' },
  { id: 'architecture', title: '2. Architecture' },
  { id: 'applications', title: '3. Applications' },
  { id: 'benefits', title: '4. Benefits' },
  { id: 'limitations', title: '5. Limitations' },
];

const gdprButtonLabels = ['Compliance', 'Data Protection', 'Privacy Officer', 'Regulation'];
const memgptButtonLabels = ['AI Models', 'Machine Learning', 'Neural Networks', 'Innovation'];

const Documentation = () =>  {
  const [activeId, setActiveId] = useState('');
    const {selectedAgent } = useStateContext();
    
  const contentRefs = useRef({});
  
  const topics = selectedAgent === 'gdpr' ? gdprTopics : memgptTopics;
  const buttonLabels = selectedAgent === 'gdpr' ? gdprButtonLabels : memgptButtonLabels;
  
  useEffect(() => {
    setActiveId(topics[0]?.id || '');

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
  }, [topics]);

  const scrollToSection = id => {
    contentRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const generateContent = topicId => {
    if (selectedAgent === 'gdpr') {
      switch (topicId) {
        case 'intro':
          return 'The General Data Protection Regulation (GDPR) is a legal framework...';
        case 'principles':
          return 'GDPR is founded on key principles: lawfulness, fairness, transparency...';
        case 'rights':
          return 'Individuals have rights including access, rectification, erasure...';
        case 'controllers':
          return 'Data controllers determine the purposes and means of processing...';
        case 'processors':
          return 'Processors handle data on behalf of controllers...';
        case 'security':
          return 'Organizations must implement technical and organizational measures...';
        case 'fines':
          return 'GDPR imposes two levels of fines: up to €10 million or 2% of annual...';
        default:
          return 'Content coming soon...';
      }
    } else {
      switch (topicId) {
        case 'overview':
          return 'MEMGPT is a powerful AI model designed to process and understand...';
        case 'architecture':
          return 'The architecture of MEMGPT is based on advanced neural networks...';
        case 'applications':
          return 'MEMGPT has applications in various fields, including language processing...';
        case 'benefits':
          return 'The benefits of MEMGPT include improved accuracy and efficiency...';
        case 'limitations':
          return 'Despite its strengths, MEMGPT has limitations such as...';
        default:
          return 'Content coming soon...';
      }
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="container1 mt-10">
        <p className='text-4xl font-bold '>{selectedAgent === 'gdpr' ? 'GDPR Agent' : 'MEMGPT Agent'}</p>
        <div className="button-group mt-5">
          {buttonLabels.map((label, index) => (
            <button key={index}>{label}</button>
          ))}
        </div>
        <div className="nav gap-4">
          <span className='text-blue-400'>📄 Documentation</span>
          <span>ℹ️ Information</span>
          <span>🖥️ Front-end</span>
          <span>🖥️ Back-end</span>
        </div>
      </div>
      <div className='flex mt-5'>
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
                {generateContent(id)}
              </p>
            </div>
          ))}
        </div>
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

export default Documentation;
