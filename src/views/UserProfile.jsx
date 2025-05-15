import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const {setSelectedAgent,gdpr,setGdpr, documentation,setDocumentation,configuration,setConfiguration,home,setHome,  login1, setlogin1, currentMode, handleClick,setIsClicked, initialState } = useStateContext();
  const navigate = useNavigate();

  // State to track if the user profile is open or closed
  const [isOpen, setIsOpen] = useState(true);

  // Create a ref to track clicks outside the component
  const profileRef = useRef(null);

  // Function to handle logout
  function handleLogout() {
    handleClick(initialState);
      setGdpr(false)
    setSelectedAgent('')
    setConfiguration(false)
    setDocumentation(false)
    setlogin1(false);
    localStorage.clear();
  
    navigate('/');
  }

  // Handle click outside to close the user profile
  useEffect(() => {
    // Function to check if the click is outside the component
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
       
        setIsClicked(initialState)
        console.log(initialState)
        setIsOpen(false)
        
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // Only render the profile if it's open
    isOpen && (
      <div
        ref={profileRef}
        className={`  relative right-32 top-10 dark:bg-black bg-[#f8f9fa] p-2 rounded-lg w-48 h-20 border border-gray-800 dark:border-[#4f4f4f] ${currentMode === 'Dark' ? 'dark' : ''}` }
       
      >
        <div className="flex">
          <CgProfile className="text-black dark:text-white text-xl mt-1" />
          <p className="text-xl dark:text-white text-[#353839] ml-2 whitespace-nowrap">User Profile</p>
        </div>
        <div className="mt-1 flex">
          <AiOutlineLogout className="dark:text-white text-black text-xl mt-1" />
          <button
            style={{ borderRadius: '10px', marginLeft: '10px' }}
            className="text-xl dark:text-white text-[#353839] hover:drop-shadow-xl"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default UserProfile;
