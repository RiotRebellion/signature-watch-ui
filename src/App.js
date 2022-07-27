import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import { useAuthentification } from './hooks/useAuthentification';

import AuthentificationForm from './components/authentification/AuthentificationForm';
import { NotFound } from './components/NotFound';
import Dashboard  from "./components/Dashboard";

function App() {
  const { login, logout, username, token, status } = useAuthentification();
  const isLogin = !!token;

  return (
    <AuthContext.Provider value={{ login, logout, username, token, status }}>
      <BrowserRouter>
        <RoutesComponent isLogin={isLogin} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

function RoutesComponent({isLogin = false}) {
  if (isLogin) {
    return (
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    );
  }
  else {
    return (
      <Routes>
        <Route path='/' element={<AuthentificationForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;