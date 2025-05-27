import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function UploadCard2() {
  const [selectedFileRFP, setSelectedFileRFP] = useState(null);
  const [selectedFileAccelerator, setSelectedFileAccelerator] = useState(null);
  const navigate = useNavigate();
  const handleFileChangeRFP = (event) => {
    setSelectedFileRFP(event.target.files[0]);
  };

  const handleFileChangeAccelerator = (event) => {
    setSelectedFileAccelerator(event.target.files[0]);
  };
 
  const handleChatClick = () => {
    navigate('/rfp');
  };
  return (
    <div className="p-4 bg-white rounded-lg">
        <div className='mt-10'>
      <p className=" mb-4">
        <strong className='text-blue-500'>Note:</strong> Please upload both RFP document and Accelerator list in PDF or Word or Excel format to proceed.
      </p>
      <div className="shadow-xl rounded-lg p-4 mb-4 bg-white">
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-dashed border-blue-300 p-4 rounded-lg text-center">
            <p className="font-semibold">Upload RFP Document</p>
            <input type="file" onChange={handleFileChangeRFP} className="hidden" id="file-upload" />
            <label htmlFor="file-upload" className="cursor-pointer text-blue-500 flex flex-col items-center mt-4">
              <UploadCloud size={40} className="text-blue-500 mb-2" />
              <span>Click or drag to upload</span>
            </label>
            {selectedFileRFP && <p className="text-gray-600 mt-2"> 📄 {selectedFileRFP.name}</p>}
          </div>
          <div className="border border-dashed border-blue-300 p-4 rounded-lg text-center">
            <p className="font-semibold">Upload Accelerator List</p>
            <input type="file" onChange={handleFileChangeAccelerator} className="hidden" id="file-upload-2" />
            <label htmlFor="file-upload-2" className="cursor-pointer text-blue-500 flex flex-col items-center mt-4">
              <UploadCloud size={40} className="text-blue-500 mb-2" />
              <span>Click or drag to upload</span>
            </label>
            {selectedFileAccelerator && <p className="text-gray-600 mt-2"> 📄 {selectedFileAccelerator.name}</p>}
          </div>
            <div className="border border-dashed border-blue-300 p-4 rounded-lg text-center">
            <p className="font-semibold">Upload Qutionnaire</p>
            <input type="file" onChange={handleFileChangeAccelerator} className="hidden" id="file-upload-2" />
            <label htmlFor="file-upload-2" className="cursor-pointer text-blue-500 flex flex-col items-center mt-4">
              <UploadCloud size={40} className="text-blue-500 mb-2" />
              <span>Click or drag to upload</span>
            </label>
            {selectedFileAccelerator && <p className="text-gray-600 mt-2"> 📄 {selectedFileAccelerator.name}</p>}
          </div>
        </div>
      </div>
      {/* Additional content or buttons can go here */}
       <div className="" style={{ display: 'flex', gap: '10px',position:'absolute',right:'30px' }}>
        <button  className="bg-blue-500 text-white py-2 px-4 w-32 rounded-lg hover:bg-blue-600">
          Upload
        </button>
        <button   onClick={handleChatClick} className="bg-green-500 text-white py-2 px-4 w-32 rounded-lg hover:bg-green-600">
          Chat
        </button>
        </div>
    </div>
    </div>
  );
}

export default UploadCard2;
