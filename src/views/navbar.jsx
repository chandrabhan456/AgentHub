import React, { useEffect, useState } from 'react';

import avatar from '../data/user-profile2.png';
import { Link, NavLink, useNavigate,Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Setting, OpenAI,UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';
import nttlogo from '../data/nttdatalogo.svg';
import { IoHomeOutline } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";

import { HiOutlineDocumentSearch } from "react-icons/hi";
import "./navbar.css"


const Navbar = () => {
  const {gdpr,setGdpr, documentation,setDocumentation,configuration,setConfiguration,home,setHome ,activeMenu,setActiveMenu,mainPage,setMainPage,initialState,handleClick,isClicked,currentMode,setCurrentMode,configurationSettings} = useStateContext();
  console.log("ok",initialState,isClicked)
  const navigate = useNavigate();
  
  const handleClick1 = () => {
    setGdpr(false)
    
    setMainPage(true)
    navigate('/'); // Navigate to the home page
  };
  
   
 
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    <div className='flex justify-between md:mx-0  relative w-full dark:bg-black'  > 
  
    <div className='flex'><img
          style={{width:"250px",marginLeft:"-5px",marginTop:'-5px'}}
          className=''
          src={nttlogo}
          alt="nttlogo"
        />
      <div className='mt-2 text-3xl' onClick={handleClick1} style={{ cursor: 'pointer' }}>
       Agent Hub
    </div>
    </div>
    

      <div   className={`relative inline-flex rounded-full h-2  ${
        (mainPage) ? 'right-5 w-16' : 'right-80 w-72'
      } top-1.5`}> 
      {(gdpr) && <><div
        className={`text-2xl cursor-pointer flex ${home ? 'text-blue-500' : 'text-gray-800'}`}
        onClick={() =>  {setHome(true);setConfiguration(false);setDocumentation(false); navigate('/gdpr')  }}      >
          <IoHomeOutline className="inline-block mt-1 mr-1" />
        Home
      </div>
      <div
        className={`text-2xl ml-4 cursor-pointer flex ${configuration ? 'text-blue-500' : 'text-gray-800'}`}
        onClick={() =>  {setHome(false);setConfiguration(true);setDocumentation(false); navigate('/admin') }}
      >
          <GrConfigure className="inline-block mt-1 mr-1" />
        Configuration
      </div>
      <div
        className={`text-2xl ml-4 cursor-pointer flex ${documentation ? 'text-blue-500' : 'text-gray-800'}`}
        onClick={() =>  {setHome(false);setConfiguration(false);setDocumentation(true);navigate('/documentation') }}      >
        <HiOutlineDocumentSearch className="inline-block text-3xl  mr-1" />
        Documentation
      </div>
      </>
      }<div style={{marginLeft:'-20px'}}
  className="flex items-center justify-center mt-5  cursor-pointer" 
  onClick={() => handleClick('userProfile')}
> 
  <img
    className="rounded-full ml-10 w-10 h-10 border border-gray-300 shadow-md"

    src={avatar}
    alt="user-profile"
  />
</div>

          {mainPage && <Navigate replace={true} to='/' />}
           {/* {isClicked.setting && <Setting /> }  */}
           {isClicked.userProfile && (<UserProfile />)}
    
           

      </div>
    </div>
  
    
    </div>
  );
};

export default Navbar;
