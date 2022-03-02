import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ILoginform {
	userId: string
	, userPw: string
}

const Login = () => {

	const [formData, setFormData] = useState<ILoginform>({
		userId: ''
		, userPw: ''
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
				<h1>WhatChaMaCallIt</h1>
				<span></span>
				<input type='text' name='userId' value={formData.userId} onChange={handleChange} placeholder='ID' required/>
				<span></span>
				<input type='password' name='userPw' value={formData.userPw} onChange={handleChange} placeholder='Password' required/>
				<button onClick={handleClick}>Submit</button>
			</form>
			<div className='login-menu'>
				<Link to="/auth/sign-up">회원가입</Link><span> | </span><Link to="/auth/find">계정을 잃어버리셨나요?</Link>
			</div>
		</div>
	);
}

export default Login;