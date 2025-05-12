import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useStateContext } from '../contexts/ContextProvider';
import { FaDatabase } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";
import { MdOutlineSchema } from "react-icons/md";
import { AiOutlineMenu } from 'react-icons/ai';
import { SiOpenai } from "react-icons/si";
import { Link, NavLink } from 'react-router-dom';
import { BsDatabaseFillGear } from "react-icons/bs";
import { OpenAI } from '.';
const Setting = () => {
    const { initialState, activeMenu,setActiveMenu,handleClick,isClicked,currentMode,setCurrentMode,configurationSettings, setConfigSettings,} = useStateContext();
   
    function handleClose()  {
      console.log("clicked")
   
      setConfigSettings(true);
      
      handleClick(false);
     
      
    }
    return (
        <div className="nav-item   absolute right-[10%] top-5 bg-[#FAFAFA] p-8 rounded-lg w-80" style={{marginLeft:'20px'}}>
          <div className="flex justify-between items-center">
            <div className=" gap-3">
                <div className='flex'>
            <p className="font-semibold text-xl text:black whitespace-nowrap mt-1">Configuration Setup</p>
            <button
            type="button"
            onClick={() => handleClick(false)}
            style={{ color: 'black', borderRadius: '50%',marginLeft:'10%',marginTop:'-7px' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
          </div>
            <div className="">
            <div className='flex'>
         
          <div className="mt-1">
            <div className='flex  hover:text-black hover:bg-[#808080] rounded'>
          <SiOpenai style={{height:"25px",width:"25px",color:'black'}} />
        {/* <button className='ml-2' onClick={() => setConfigSettings(true)}>OpenAI</button> */}
        <NavLink
        onClick={() =>  {handleClick(false);setActiveMenu(false); }}
                    to='/openAIConfiguration'
                    key='openAIConfiguration'
                   
                   
                  >
                  
                    
                    <span className="capitalize text-black text-lg ml-2 " >OpenAI</span>
                  </NavLink>
          </div>
        {/* <div className='flex mt-1  hover:text-black hover:bg-[#808080] rounded'>
        <BsDatabaseFillGear style={{height:"25px",width:"25px",color:'black'}} />
        <NavLink
        onClick={() =>  {handleClick(false);setActiveMenu(false); }}
                    to='/databaseConfig'
                    key='databaseConfig'
                   
                   
                  >
                  
                    
                    <span className="capitalize text-black text-lg ml-2 " >Database</span>
                  </NavLink>
           </div>  
            */}
          </div>
      
          </div>
          </div>
            
           
       
            </div>
           
            
          </div>
         
        </div>
        
      );
}

export default Setting
