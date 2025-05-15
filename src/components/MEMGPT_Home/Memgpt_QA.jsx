import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import './Home.css'
import azureimg from '../../data/chatbot.png';
const Memgpt_QA = () => {
  const [messages, setMessages] = useState({
    Chat01: [], // Initialize Chat01 with an empty array
   
  });
  const [inputValue, setInputValue] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [chatList, setChatList] = useState(['Chat01']);
  
  // State to hold the current chat
  const [currentChat, setCurrentChat] = useState('Chat01');
  const addNewChat = () => {
    const nextChatNumber = chatList.length + 1;
    const newChatId = `Chat${nextChatNumber < 10 ? '0' + nextChatNumber : nextChatNumber}`;
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
  

  const handleSendMessage = () => {
    if (inputValue.trim() !== '' && currentChat) {
      // Ensure the currentChat has been initialized in messages
      if (!messages[currentChat]) {
        setMessages((prevMessages) => ({ ...prevMessages, [currentChat]: [] }));
      }

      // Add user message to current chat
      setMessages((prevMessages) => ({
        ...prevMessages,
        [currentChat]: [...prevMessages[currentChat], { sender: 'user', text: inputValue }]
      }));
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [currentChat]: [
            ...prevMessages[currentChat],
            { sender: 'bot', text: 'Hello! I’m your friendly AI assistant, here to help you with any questions or information you need. Whether you’re looking for advice, technical assistance, or just curious about something, feel free to ask. I can provide insights, offer solutions, or even just chat about interesting topics. My goal is to make your experience as seamless and informative as possible. If there’s anything specific you’d like to know or discuss, just let me know, and I’ll do my best to assist you. Remember, I’m here to help, so don’t hesitate to reach out anytime!' }
          ]
        }));
      }, 100);
    }
  };

  useEffect(() => {
 
  },[showHistory,currentChat,inputValue])

  

  return (
    <div className="h-screen bg-white flex  ">
      
      <div
        className={`page-container transition-all duration-300 ${showHistory ? '' : 'w-full'}`}
        style={{ width: showHistory ? '70%' : '100%' }}
      
      >
      <div className="content-header">
            <p className="text-3xl">GenAI MEMGPT Agent | {currentChat}</p>
           
            <div className="button-group1" style={{ display: 'flex', gap: '10px',position:'absolute',right:'0' }}>
  <button className="history-button text-xl" onClick={toggleHistory}>
    History
  </button>
  <button className="new-chat-button text-xl" onClick={addNewChat}>
        New Chat
      </button>
</div>

            
            </div>
            {messages[currentChat].length === 0 && (
  <div className="flex items-center justify-center h-full w-full" style={{marginTop:'-100px'}}>
    <div className="text-center">
      <img
        src={azureimg}
        alt="nttlogo"
        style={{ width: '15%', height: '145px', display: 'block', margin: '0 auto' }}
      />
      <p className="text-center text-2xl">
        This chatbot is configured to answer your questions
      </p>
    </div>
  </div>
)}

    
    {messages[currentChat].length !== 0 && (
<div className="chat-container p-4" >
  {(messages[currentChat] || []).map((message, index) => (
    
    <div
      key={index}
      className={`mb-4  ${
        message.sender === 'user' ? 'justify-end' : 'justify-start'
      }`}
      style={{ display: 'flex' }} // Explicitly ensure flex display
    >
      
      <div
  className={` items-center justify-center  p-2 rounded flex-shrink border w-fit max-w-[65%] min-w-[48px] min-h-[65px]  break-words whitespace-normal ${
    message.sender === 'user'
      ? 'bg-[#EDF5FD] text-black border-gray-200'
      : 'bg-white text-black border-gray-200'
  }`}
  style={{overflow:'hidden'}}
>


        {message.text}
      </div>
    </div>
  ))}
</div>

)}

  
            <div className="input-container ">
      
    <textarea
      className="question-input0 dark:bg-[#1e1e1e] bg-white  border border-gray-300 dark:border-[#4f4f4f]  dark:text-white text-black"
      placeholder="Type your question here..."
      value={inputValue}
      onChange={handleInputChange}
    ></textarea>
  
    <button className="send-button" onClick={handleSendMessage}>
      <FiSend className="send-icon" />
    </button>
  </div>
  </div>
  {showHistory && (
        <div className="history-box ml-2 transition-all duration-300 text-left m-0">
          <h2 className="history-title">Chat History</h2>
          <ul className="chat-list">
          {chatList.map((chat, index) => (
              <li 
                key={index} 
                className={`chat-item ${currentChat === chat ? 'active' : ''}`}
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
}

export default Memgpt_QA;
