import React, { useState } from 'react';

interface formState {
	userId: string
	, userPw: string
}

const Login = () => {

	const [formData, setFormData] = useState<formState>({
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
		</div>
	)
}

export default Login;