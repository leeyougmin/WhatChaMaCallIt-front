import React from 'react';

const FindId = () => {
  return (
		<div className='find-wrap'>
			<form action="">
				<input type="email" placeholder='Email' required/>
				<button>인증하기</button>
			</form>
			<div className="finded-id">
				<p>회원님의 ID는 <span>abcd1234</span> 입니다.</p>
			</div>
		</div>
	);
}

export default FindId;