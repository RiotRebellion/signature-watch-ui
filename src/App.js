import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthContext } from "./contexts/AuthContext";
import { useAuthentification } from "./hooks/useAuthentification";

function App() {
  const {login, logout, token, status} = useAuthentification()

  return(
    <AuthContext.Provider value={{login, logout, token, status}}>
      <BrowserRouter>
        <RoutesComponent/>
      </BrowserRouter>
    </AuthContext.Provider>
  )

  function RoutesComponent() {
    const status = useContext(AuthContext)

    return (
      status
      ? <Routes>
        <Route path='/' element></Route>
      </Routes>
    )
  }
}

export default App;