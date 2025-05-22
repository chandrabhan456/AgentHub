import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./delete.css";

export const Delete = ({ data,closeModal, onSubmit, defaultValue }) => {
 
 
  const [errors, setErrors] = useState("");

  function handlecancel(){
    closeModal();
   }
   const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/users/delete_user/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any authorization headers if needed
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete user: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('User deleted:', result);

      // Update your state or UI here to reflect the deleted user
      // For example, remove the user from a list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


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
        <label className="w-70">Are You Sure to Delete UserName:-{data}</label>
        <div className="flex" style={{marginTop:'15px',marginLeft:'70px'}}>
  
      <button type="submit" className="btn" onClick={() => handleDelete(1)}>Confirm</button>
      </div>
      </div>
     
    </div>
  );
};
export default Delete;