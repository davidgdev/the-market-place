import React, { useState } from 'react';
import './sass/App.scss';
import NavBar from '../src/components/NavBar'
import Login from '../src/components/Login';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken}></Login>
  }


  return(
    <NavBar />
  )
}

export default App;