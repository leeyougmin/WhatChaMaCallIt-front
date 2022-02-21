import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Login from './pages/auth/Login';
import NotFound from './pages/error/NotFound';


const App = () => {
  return (
    <div id="wrap">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
