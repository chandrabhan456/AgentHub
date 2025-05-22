import React,{useState} from 'react'

function Password_Change() {
  const [formData, setFormData] = useState({
     firstName: '',
     lastName: '',
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
           firstName: '',
           lastName: '',
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
     <div className="h-screen bg-white flex items-center justify-center">
       <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md ml-[30%]">
         <form className="flex flex-col items-center" onSubmit={handleSubmit}>
           <div className="mb-4 w-full">
             <label htmlFor="firstName" className="block ml-2 font-semibold mb-1">User ID</label>
             <input
               type="text"
               id="firstName"
               name="firstName"
               value={formData.firstName}
               onChange={handleChange}
               className="w-full h-12 text-lg bg-slate-100 border border-gray-300 p-2 rounded-lg outline-none"
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
               className="w-full h-12 text-lg bg-slate-100 border border-gray-300 p-2 rounded-lg outline-none"
             />
           </div>
 
           <div className="mb-4 w-full">
             <label htmlFor="designation" className="block ml-2 font-semibold mb-1">New Password</label>
             <input
               type="text"
               id="designation"
               name="designation"
               value={formData.designation}
               onChange={handleChange}
               className="w-full h-12 text-lg bg-slate-100 border border-gray-300 p-2 rounded-lg outline-none"
             />
           </div>
             <div className="mb-4 w-full">
             <label htmlFor="designation" className="block ml-2 font-semibold mb-1">Confirm Password</label>
             <input
               type="text"
               id="designation"
               name="designation"
               value={formData.designation}
               onChange={handleChange}
               className="w-full h-12 text-lg bg-slate-100 border border-gray-300 p-2 rounded-lg outline-none"
             />
           </div>
 
 
           <div className="flex mt-6 justify-end w-full" style={{marginLeft:'116%'}}>
             <button
               type="button"
               className="bg-gray-400 text-white font-bold py-2 px-4 rounded mr-2"
               onClick={() => setFormData({ firstName: '', lastName: '', email: '', designation: '' })}
             >
               Clear
             </button>
             <button
               type="submit"
               className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
             >
               Submit
             </button>
           </div>
         </form>
       </div>
     </div>
   );
 }
 


export default Password_Change
