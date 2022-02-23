import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Find from './pages/auth/Find';

import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import NotFound from './pages/error/NotFound';

const App = () => {
  return (
    <div id="wrap">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/auth/login' element={<Login />}/>
        <Route path='/auth/sign-up' element={<SignUp />}/>
        <Route path='/auth/find' element={<Find />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
