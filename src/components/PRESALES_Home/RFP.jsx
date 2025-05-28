import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import "./Home1.css";
import azureimg from "../../data/chatbot.png";
import { ThumbsUp, ThumbsDown, Copy, Download } from 'lucide-react';
import {  useStateContext } from "../../contexts/ContextProvider";

const buttonItems = [
  { label: "Generate Questionnaire" },
  { label: "Generate RFP document" },
  { label: "Generate Summary" },
  { label: "Generate Use Case" },
  { label: "Generate High Level Architecture" },
  { label: "Generate Tech Stack" },
  { label: "Generate Data Volume" },
];
const RFP = () => {
  const [messages, setMessages] = useState({
    Chat01: [], // Initialize Chat01 with an empty array
  });
  const {selectedFile, setSelectedFile} = useStateContext()
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [chatList, setChatList] = useState(["Chat01"]);
   const [copiedIndex, setCopiedIndex] = useState(null);
   const [likedIndex, setLikedIndex] = useState(null);
   const [responseTime, setResponseTime] = useState(null);
  // State to hold the current chat
  const [currentChat, setCurrentChat] = useState("Chat01");
  const addNewChat = () => {
    const nextChatNumber = chatList.length + 1;
    const newChatId = `Chat${
      nextChatNumber < 10 ? "0" + nextChatNumber : nextChatNumber
    }`;
    setChatList([...chatList, newChatId]);
    setCurrentChat(newChatId);
    setMessages((prevMessages) => ({ ...prevMessages, [newChatId]: [] })); // Initialize empty message array for new chat
  };
  const toggleHistory = () => {
    setShowHistory((prevState) => !prevState);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const handleButtonClick = (label) => {
    setInputValue(label)
    
  };
  const handleSendMessage = async () => {
if (!inputValue.trim() || !selectedFile) return;
 
  if (!messages[currentChat]) {
        setMessages((prevMessages) => ({ ...prevMessages, [currentChat]: [] }));
      }
 
      // Add user message to current chat
      setMessages((prevMessages) => ({
        ...prevMessages,
        [currentChat]: [
          ...prevMessages[currentChat],
          { role: "user", content: inputValue },
        ],
      }));
      setInputValue("");
 
  const formData = new FormData();
  formData.append("file", selectedFile); // send only RFP for now
  formData.append("query", inputValue.trim());
 
  const startTime = performance.now();

  setIsTyping(true);
 
  try {
    const res = await fetch("http://localhost:8000/generate", {
      method: "POST",
      body: formData,
    });
 
    const data = await res.json();
    const endTime = performance.now();
    const timeTaken = data.response_time;//((endTime - startTime) / 1000).toFixed(2);
 
    setResponseTime(timeTaken);
 
    const assistantMsg = {
      role: 'assistant',
      content: data.message,
      download: data.download_url?.split('/').pop(),
      fullUrl: data.download_url,
      timeTaken,
    };
 
    setMessages((prevMessages) => ({
    ...prevMessages,
    [currentChat]: [
      ...prevMessages[currentChat],
      assistantMsg,
    ],
  }));
  } catch (error) {
    console.error("Generation error:", error);
const assistantMsg = {
      role: 'assistant',
      content: "Server Response failed!",
     
    };
 
    setMessages((prevMessages) => ({
    ...prevMessages,
    [currentChat]: [
      ...prevMessages[currentChat],
      assistantMsg,
    ],
  }));
  } finally {
    setIsTyping(false);
    //setLoading(false);
  }
  };
const handleDownload = async (filename) => {
  const res = await fetch("http://localhost:8000/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ filename }),
  });

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  a.remove();
};

 const handleCopy = (text, index) => {
   navigator.clipboard.writeText(text);
   setCopiedIndex(index);
   setTimeout(() => setCopiedIndex(null), 2000);
 };
  useEffect(() => {}, [showHistory, currentChat, inputValue]);

  return (
    <div className="h-screen bg-white flex  ">
      <div
        className={`page-container1 transition-all duration-300 ${
          showHistory ? "" : "w-full"
        }`}
        style={{ width: showHistory ? "70%" : "100%" }}
      >
        <div className="content-header">
          <p className="text-3xl">RFP Understanding | {currentChat}</p>

          <div
            className="button-group1"
            style={{
              display: "flex",
              gap: "10px",
              position: "absolute",
              right: "0",
            }}
          >
            <button className="history-button text-xl" onClick={toggleHistory}>
              History
            </button>
            <button className="new-chat-button text-xl" onClick={addNewChat}>
              New Chat
            </button>
          </div>
        </div>
        {messages[currentChat].length === 0 && (
          <div
            className="flex items-center justify-center h-full w-full"
            style={{ marginTop: "-100px" }}
          >
            <div className="text-center">
              <img
                src={azureimg}
                alt="nttlogo"
                style={{
                  width: "15%",
                  height: "145px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <p className="text-center text-2xl">
                This chatbot is configured to answer your questions
              </p>
            </div>
          </div>
        )}

        {messages[currentChat].length !== 0 && (
          <div className="chat-container1 p-4">
            {(messages[currentChat] || []).map((msg, i) => (
              <div
                key={i}
                  className={`flex flex-col ${
           msg.role === 'user' ? 'items-end' : 'items-start'
  }`} // Explicitly ensure flex display
              >
                <div
                  className={` items-center justify-center  p-2 rounded flex-shrink border w-fit max-w-[65%] min-w-[48px] min-h-[65px]  break-words whitespace-normal ${
                    msg.role === "user"
                      ? "bg-[#EDF5FD] text-black border-gray-200"
                      : "bg-white text-black border-gray-200"
                  }`}
                  style={{ overflow: "hidden" }}
                >
                  {msg.role === 'assistant' ? `Assistant: ${msg.content}` : `You: ${msg.content}`}
                                       {msg.download && (
                  <button
                    onClick={() => handleDownload(msg.download)}
                    className="mt-2 flex items-center gap-1 text-blue-700 text-sm hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    Download {msg.download?.split('_')[0] || "File"}
                  </button>
                    )}
                </div>
                 {msg.role === 'assistant' && (
                <div className="flex gap-2 mt-1 text-blue-700">
                <ThumbsUp
                                         className={`w-4 h-4 cursor-pointer transition ${
                                           likedIndex === `up-${i}`
                                             ? 'fill-blue-600'
                                             : 'hover:text-blue-600'
                                         }`}
                                         onClick={() => setLikedIndex(`up-${i}`)}
                                       />
                <ThumbsDown
                                         className={`w-4 h-4 cursor-pointer transition ${
                                           likedIndex === `down-${i}`
                                             ? 'fill-blue-600'
                                             : 'hover:text-blue-600'
                                         }`}
                                         onClick={() => setLikedIndex(`down-${i}`)}
                                       />
                <Copy
                                         className={`w-4 h-4 cursor-pointer transition ${
                                           copiedIndex === i
                                             ? 'text-green-600 scale-110'
                                             : 'hover:text-blue-600'
                                         }`}
                                         onClick={() => handleCopy(msg.content, i)}
                                       />
                                       {copiedIndex === i && (
                <span className="text-xs text-green-600 font-medium">Copied!</span>
                                       )}
                                       
                  {msg.timeTaken && (<>
              <span className="text-xs text-gray-500 ml-2">⏱️ {msg.timeTaken}s</span>
               <span className="text-lg text-gray-500 ml-2" style={{marginTop:'-8px'}}>$</span>
               </>
            )}
                </div>
                                   )}
              </div>


            ))}


             {isTyping && (
  <div className="flex flex-col items-start">
    <div className="items-center justify-center p-2 rounded bg-white text-black border border-gray-200 animate-pulse">
      <div className="flex items-center gap-2">
<span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
<span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
<span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
</div>
    </div>
  </div>
)} 
          </div>
        )}

        <div className="input-container1 ">
          <textarea
            className="question-input01 dark:bg-[#1e1e1e] bg-white  border border-gray-300 dark:border-[#4f4f4f]  dark:text-white text-black"
            placeholder="Type your question here..."
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>

          <button className="send-button mt-2" onClick={handleSendMessage}>
            <FiSend className="send-icon" />
          </button>
        </div>

        <div className=" fixed bottom-1 mt-0  p-4 bg-white">
          <ul className="flex flex-wrap gap-4 bg-white p-0 rounded-md ">
            {buttonItems.map((item, index) => (
              <li key={index}>
                <button
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                  onClick={() => handleButtonClick(item.label)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showHistory && (
        <div className="history-box ml-2 transition-all duration-300 text-left m-0">
          <h2 className="history-title">Chat History</h2>
          <ul className="chat-list">
            {chatList.map((chat, index) => (
              <li
                key={index}
                className={`chat-item ${currentChat === chat ? "active" : ""}`}
                onClick={() => setCurrentChat(chat)} // Set current chat on click
              >
                {chat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RFP;
