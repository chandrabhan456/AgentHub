import React,{useEffect} from 'react';
import { emailValidator, passwordValidator } from '../components/regexValidators';
import {useNavigate} from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider";
import "./Login.css";
import bgimg from '../data/Media.jpg';

const Login = () => {
    const { login1, setlogin1 } = useStateContext();
	

	const [input, setInput] = React.useState({ email: '', password: '' });

	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

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
        setlogin1(true)
        console.log("logged in")
	
       
	};
	
		
	return (
		
	  <div className="login " >
	<h4>Login</h4>
	<form onSubmit={formSubmitter}>
	  <div className="transparent-input">
		<input
		type="text"
		name="email"
		placeholder=" username"
		onChange={handleChange}
		  className="text_input"

		/>
	  </div>
	  <div className="mt-2 transparent-input">
		<input
		 type="password"
		 name="password"
		 placeholder=" password"
		 onChange={handleChange}

		  className="text_input"

		/>
	  </div>
	  <button
		
		
		className="btn"

	  >Login</button>
	</form>
	
  </div>
  
)
};

export default Login;