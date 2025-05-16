import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./Model.css";

export const Modal = ({ data,closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      OrderID: data.OrderID,
     CustomerName:data.CustomerName,
     OrderItems:data.OrderItems,
     TotalAmount:data.TotalAmount,
     Location:data.Location
    }
  );
 
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    console.log("Hi",e.target.value)
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  function handleSubmit(e){
    e.preventDefault();
  
    const formData = new FormData(e.target)
    const orders = Object.fromEntries(formData.entries())
    console.log(orders)
  if(!orders.Location){
     return
    }
    closeModal();
  };
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
      <div className="modal bg-white dark:bg-white">
        <form onSubmit={handleSubmit}>
          <div className="flex">
        <label className=" " style={{marginRight:'40%', whiteSpace:'nowrap'}}>{ (data.OrderID ? "Edit" : 'Add')} Item</label>
        <div style={{marginLeft:'110px'}}>
        <IoCloseCircleOutline style={{height:'25px',width:'25px'}} onClick={handlecancel}/>
        </div>
        </div>
          <div className="form-group mt-5">
              <label htmlFor="page" style={{marginRight:'80%'}}>OrderID</label>
            <input name="OrderID" value={formState.OrderID} onChange={(e) => setFormState(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="page" style={{marginRight:'85%',whiteSpace:'nowrap'}}>Customer Name</label>
            <input name="CustomerName" value={formState.CustomerName} onChange={(e) => setFormState(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="page" style={{marginRight:'86%',whiteSpace:'nowrap'}}>Order Item</label>
            <input name="OrderItems" value={formState.OrderItems} onChange={(e) => setFormState(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="page"  style={{marginRight:'80%',whiteSpace:'nowrap'}}>Total Amount</label>
            <input name="TotalAmount" value={formState.TotalAmount} onChange={(e) => setFormState(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="page" style={{marginRight:'80%'}}>Location</label>
            <input name="Location" value={formState.Location} onChange={(e) => setFormState(e.target.value)}/>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" >
          { (data.OrderID ? "Update" : 'Submit')}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;