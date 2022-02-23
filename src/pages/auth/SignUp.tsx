import React, { useState } from "react";
import { Link } from 'react-router-dom';

interface ILoginform {
	userId: string
	, userPw: string
	, userNm: string
	, userEmail: string
	, userPhone: string
}

const SignUp = () => {

	const [formData, setFormData] = useState<ILoginform>({
		userId: ''
		, userPw: ''
		, userNm: ''
		, userEmail: ''
		, userPhone: ''
	});

	const handleChange = ( e:React.ChangeEvent<HTMLInputElement> ) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	}
	
	const handleClick = ( e:React.MouseEvent<HTMLButtonElement> ) => {
		if(!formData.userId) {
			alert('')
		}
	}
	return (
		<div className='login-wrap'>
			<form name='login-form' action='/auth/login'>
				<span></span>
				<input type='text' name='userId' value={formData.userId} onChange={handleChange} placeholder='ID' required/>
				<span></span>
				<input type='password' name='userPw' value={formData.userPw} onChange={handleChange} placeholder='Password' required/>
				<span></span>
				<input type='text' name='userNm' value={formData.userNm} onChange={handleChange} placeholder='Name' required/>
				<span></span>
				<input type='tel' name='userPhone' value={formData.userPhone} onChange={handleChange} placeholder='Phone' required/>
				<span></span>
				<input type='email' name='userEmail' value={formData.userEmail} onChange={handleChange} placeholder='Email' required/>
				<button onClick={handleClick}>Sign Up!</button>
			</form>
			<div className='login-menu'>
				<Link to="/auth/login">Login!</Link><span> | </span><Link to="/auth/find-password">forgot my Password?</Link>
			</div>
		</div>
	);
}

export default SignUp;