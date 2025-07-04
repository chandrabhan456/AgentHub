import React, { useState,useEffect } from 'react';
import { UploadCloud } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import {  useStateContext } from "../../contexts/ContextProvider";
import RFP  from './RFP'

   const modelName = [
    { value: 'llm1', label: 'GPT-4o' },
    { value: 'llm2', label: 'llama-3' },
   
    { value: 'llm3', label: 'GPT-4o-mini' },
 
    // Add more options as needed
  ];


const UploadCard = () => {
  const [selectedFileRFP, setSelectedFileRFP] = useState(null);
  const [selectedFileAccelerator, setSelectedFileAccelerator] = useState(null);
  const [modelLabel, setmodelLabel] = useState(modelName[0].value);
  const [uploadSuccess,setUploadSuccess] = useState(false)
  const {selectedFile, setSelectedFile} = useStateContext()
  const navigate = useNavigate();
  const handleFileChangeRFP = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedFileRFP(event.target.files[0]);
  };

  const handleFileChangeAccelerator = (event) => {
    setSelectedFileAccelerator(event.target.files[0]);
  
  };
   useEffect(() => {
        if(selectedFileRFP && selectedFileAccelerator)
    {
        
        setUploadSuccess(true)
    }
      
    }, [uploadSuccess,selectedFileAccelerator,selectedFileRFP]);
 
 
  return (
    <div className="p-4 bg-white rounded-lg">
    {!uploadSuccess &&    <div className='mt-10'>
<p className=" mb-4 flex">
        <strong className='text-blue-500'>Note:</strong> Please upload both RFP document and Accelerator list in PDF or Word or Excel format to proceed.
             <select
        id="investment-type"
        name="investment-type"
        value={modelLabel}
        style={{marginTop:'-10px'}}
        className="border ml-2 border-gray-300 rounded-md p-2 text-lg focus:outline-none focus:border-gray-400"
        required
      >
 
        {modelName.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      </p>
      <div className="shadow-xl rounded-lg p-4 mb-4 bg-white">
        <div className="grid grid-cols-2 gap-4">
             <div className="shadow-xl rounded-lg p-4 mb-4 bg-white">
                <p className="font-semibold text-xl">Upload RFP Document</p>
          <div className="border border-dashed border-blue-300 p-4 rounded-lg text-center mt-4">
            
            <input type="file" onChange={handleFileChangeRFP} className="hidden" id="file-upload" />
            <label htmlFor="file-upload" className="cursor-pointer text-blue-500 flex flex-col items-center mt-4">
              <UploadCloud size={40} className="text-blue-500 mb-2" />
              <span>Click or drag to upload</span>
            </label>
           
          </div>
           {selectedFileRFP && <p className="text-gray-600 mt-2"> 📄 {selectedFileRFP.name}</p>}
          </div>
          <div className="shadow-xl rounded-lg p-4 mb-4 bg-white">
                <p className="font-semibold text-xl">Upload Accelerator List</p>
          <div className="border border-dashed border-blue-300 p-4 rounded-lg text-center mt-4">
            <input type="file" onChange={handleFileChangeAccelerator} className="hidden" id="file-upload-2" />
            <label htmlFor="file-upload-2" className="cursor-pointer text-blue-500 flex flex-col items-center mt-4">
              <UploadCloud size={40} className="text-blue-500 mb-2" />
              <span>Click or drag to upload</span>
            </label>
            </div>
             {selectedFileAccelerator && <p className="text-gray-600 mt-2"> 📄 {selectedFileAccelerator.name}</p>}
         
          </div>
        </div>
      </div>
   
    </div>}
    {uploadSuccess &&<>
 
    <div className='mt-5 w-full bg-gray-100 rounded-lg p-4'>
        <p className='font-semibold'><strong>Uploaded RFP:</strong>📄{selectedFileRFP.name}</p>
          <p className='font-semibold'><strong className='font-bold '>Uploaded Accelerator:</strong> 📄{selectedFileAccelerator.name}</p>
    </div>
    <div className='mt-3 ' style={{height:'70%'}}>
    <RFP />
    </div>
    </>}
    </div>
  );
}

export default UploadCard;
