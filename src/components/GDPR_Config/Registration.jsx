import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    designation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.example.com/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User added successfully');
        // Optionally, clear the form or redirect the user
        setFormData({
          fname: '',
          lname: '',
          email: '',
          designation: '',
        });
      } else {
        console.error('Failed to add user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-screen bg-white  items-center justify-center">
      <div className="bg-gray-50 shadow-2xl rounded-lg p-8  w-[25%] ml-[35%] mt-[100px]">
        <p className='text-2xl ml-2 font-extrabold text-blue-800'>Add New User</p>
        <form className="flex flex-col mt-2" onSubmit={handleSubmit}>
          <div className=" w-full">
            <label htmlFor="fname" className="block ml-2  font-semibold mb-1">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className=" w-[94%] h-12 text-lg bg-slate-200 border border-gray-300 p-2 rounded-lg outline-none"
            />
          </div>

          <div className="mb-1 w-full">
            <label htmlFor="lname" className="block ml-2 font-semibold mb-1">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-[94%]  h-12 text-lg bg-slate-200 border border-gray-300 p-2 rounded-lg outline-none"
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="email" className="block ml-2 font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[94%]  h-12 text-lg bg-slate-200 border border-gray-300 p-2 rounded-lg outline-none"
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="designation" className="block ml-2 font-semibold mb-1">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-[94%]  h-12 text-lg bg-slate-200 border border-gray-300 p-2 rounded-lg outline-none"
            />
          </div>

          <div className="flex mt-6 justify-end w-full" style={{marginLeft:'25%'}}>
            <button
              type="button"
              className="bg-gray-400 w-[30%] text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => setFormData({ fname: '', lname: '', email: '', designation: '' })}
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-blue-500 w-[40%] text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
