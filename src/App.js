import React,{useEffect,useState} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar,  Sidebar} from './views';
import { useStateContext } from './contexts/ContextProvider';
import {MEMGPT,MainPage,GDPR,Data_Mask,Compliance,Rectification,RFP,DSAR,Admin1,Documentation,Registration,Pass } from './components'
import nttlogo from './data/nttdatalogo.svg';
import Login from "./views/Login";
const App = () => {
  localStorage.setItem('OpenAI_Configuration',true)
  localStorage.removeItem("login");
  const {selectedAgent,gdpr,mainPage,documentation,setDocumentation,configuration,setConfiguration,home,setHome ,login1,setlogin1,currentMode, setCurrentMode, } = useStateContext();
  console.log("chandu",currentMode)
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  useEffect(() => {
   
    const currentThemeMode = localStorage.getItem('themeMode');
    if ( currentThemeMode) {
     
      setCurrentMode(currentThemeMode);
    }
  }, []);
 
 
  return (
<div className={currentMode === 'Dark' ? 'dark' : ''}>

<BrowserRouter future={{ v7_startTransition: true,v7_relativeSplatPath:true }}>
  {!login1 ? (
    <Login />
  ) : (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Full Width at Top */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md custom-navbar">
        <Navbar />
      </div>

      {/* Sidebar & Content Container (Below Navbar) */}
      <div className="flex flex-row mt-12">
        {/* Sidebar - Fixed on Left */}
        {isSidebarVisible && <div className="w-80 h-screen fixed left-0 top-12 bg-[#F7F8FB] ">
          <Sidebar />
        </div>}

     {/* Main Content - Takes Remaining Space */}
 <div className={`transition-all duration-300 w-full overflow-x-hidden ${isSidebarVisible ? 'ml-80' : 'ml-80'}`}>
  <Routes>
  {mainPage && (
      <>
      
        <Route path="/" element={<MainPage />} />
      </>)}
    {/* GDPR routes */}
    {selectedAgent === 'gdpr' && (
      <>
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/data-masking" element={<Data_Mask />} />
         <Route path="/rfp_compliance" element={<RFP />} />
    <Route path="/rectification" element={<Rectification />} />
    <Route path="/dsar" element={<DSAR />} />

      </>
    )}
    
    {/* MEMGPT routes */}
    {selectedAgent === 'memgpt' && (
      <>
        <Route path="/memgpt" element={<MEMGPT />} />
        </>)}
    {/* Common routes available regardless of flags */}
   
    {/* Configuration routes */}
    {configuration && (
      <>
        <Route path="/registration" element={<Registration />} />
        <Route path="/password_change" element={<Pass />} />
        <Route path="/admin" element={<Admin1 />} /> {/* Changed path to avoid conflict */}
      </>
    )}

    {/* Documentation routes */}
    {documentation && (
      <Route path="/documentation" element={<Documentation />} />
    )}
  </Routes>
</div>

      </div>
    </div>
  )}
</BrowserRouter>

</div>  )
}

export default App
