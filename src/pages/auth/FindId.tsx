import React from 'react';

const FindId = () => {
  return (
		<div className='find-wrap'>
			<form action="">
				<input type="email" placeholder='Email' required/>
				<button>전송하기</button>
			</form>
			<form action="">
				<input type="number" placeholder='Auth Code' required/>
				<button>인증하기</button>
			</form>
			<div className="finded">
				<p>회원님의 PW은 <span>&quot;abcd1234&quot;</span> 입니다.</p>
			</div>
			<button type='button'>로그인하러가기</button>
		</div>
	);
}

export default FindId;