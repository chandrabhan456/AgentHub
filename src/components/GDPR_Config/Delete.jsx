import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./delete.css";

export const Delete = ({ data,closeModal, onSubmit, defaultValue }) => {
 
 
  const [errors, setErrors] = useState("");

  function handlecancel(){
    closeModal();
   }
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container"){ 
          console.log(e.target.className);
          closeModal();
       } }}
    >
      <div className="modal">
      <div className="flex ">
       
        <div style={{marginLeft:'320px',marginTop:'-20px'}}>
        <IoCloseCircleOutline style={{height:'25px',width:'25px'}} onClick={handlecancel}/>
        </div>
        </div>
        <label className="w-70">Are You Sure to Delete Order ID:-{data}</label>
        <div className="flex" style={{marginTop:'15px',marginLeft:'60px'}}>
      <button type="submit" className="btn1" onClick={handlecancel}>Cancel</button>
      <button type="submit" className="btn" onClick={handlecancel}>Submit</button>
      </div>
      </div>
     
    </div>
  );
};
export default Delete;