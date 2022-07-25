import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthContext } from './contexts/AuthContext';
import { useAuthentification } from './hooks/useAuthentification';

import AuthentificationForm from './components/authentification/AuthentificationForm'
import { NotFound } from './components/NotFound'

function App() {
  const { login, logout, token, status } = useAuthentification()

  return (
    <AuthContext.Provider value={{ login, logout, token, status }}>
      <BrowserRouter>
        <RoutesComponent status={status} />
      </BrowserRouter>
    </AuthContext.Provider>
  )

  function RoutesComponent(status = false) {
    if (status) {
      return (
        <Routes>
          <Route path='/' element={<AuthentificationForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      );
    }
    else {
      return (
        <Routes>
          <Route path='/home' element={<p />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      );
    }
  }
}

export default App;