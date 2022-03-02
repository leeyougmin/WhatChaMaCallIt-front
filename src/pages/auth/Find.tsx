import React, { useState } from "react";
import { Link } from 'react-router-dom';
import FindId from "./FindId";
import ResetPassword from "./ResetPassword";

const Find = () => {

	const [ tab, setTab ] = useState(0);

  return (
		<div className="login-wrap">
			<div className="tab-wrap">
				<div className="tab-nav">
					<nav>
						<ul>
							<li className={!tab ? 'on' : ''}><button type='button' onClick={() => setTab(0)}>아이디 찾기</button></li>
							<li className={!tab ? '' : 'on'}><button type='button' onClick={() => setTab(1)}>비밀번호 초기화</button></li>
						</ul>
					</nav>
				</div>
				<div className="tab-content">
					{!tab ? <FindId /> : <ResetPassword />}
				</div>
			</div>
		</div>
	);
}

export default Find;