import React,{useState} from 'react';
import { emailValidator, passwordValidator } from './regexValidators';
import {Navigate, useNavigate} from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons
import "./Login.css";
const Login = () => {
    const { login1, setlogin1,setMainPage } = useStateContext();
	 const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

	const [input, setInput] = React.useState({ email: '', password: '' });

	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');
   const navigate = useNavigate();
	const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
		
	};
  console.log("vidhi",login1)
	
	const formSubmitter=(e) =>{
		
		e.preventDefault();
  
		
		setsuccessMessage('');
		if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(input.password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
		// setsuccessMessage('Successfully Validated');
		if(input.email !== 'admin@a.com' || input.password !== 'Password@1') return seterrorMessage('Invalid email or password');

		localStorage.setItem('login','true');
        setMainPage(true)
        setlogin1(true)
       
        console.log("logged in")
	
       
	};
	
		
	return (
		
<div className="login">
	 <div className="login-form">
  <form onSubmit={formSubmitter}>
    <div className="input-group">
      <label htmlFor="username" className="input-label">Username</label>
      <input
        type="text"
        id="username"
        name="email"
        placeholder="Enter your username"
        onChange={handleChange}
        className="text-input"
         autoComplete='current-password'
      />
    </div>
    <div className="input-group mt-2" style={{ position: 'relative' }}>
      <label htmlFor="password" className="input-label">Password</label>
      <input
        type={passwordVisible ? 'text' : 'password'}
        id="password"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
        className="text-input"
        autoComplete='current-password'
        style={{ paddingRight: '30px' }} // Add padding to accommodate the icon
      />
     <span
  onClick={togglePasswordVisibility}
  className="absolute right-2 top-10 cursor-pointer text-xl text-blue-500"
>
  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
</span>

    </div>
    <div className="forgot-password">
      <a href="#">Forgot Password?</a>
    </div>
    <button className="btn">Login</button>
  </form>
</div>

  </div>
)
};

export default Login;