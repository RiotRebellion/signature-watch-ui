import React, { useContext, useState } from 'react';
import { axiosContext } from '../contexts/AxiosContext';
import { AuthContext } from '../contexts/AuthContext';

function AuthentificationForm(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  
  let token = '';

  const login = useContext(AuthContext);

  const buttonHandler = async function(){
    await axiosContext.post('/authentification/login', [username, password], { 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      token = res.data.token
    })
  }

  return (
    <div>
        <h3>Реестр ИБИДО</h3>
        <form>
          <label>
            <p>Username</p>
            <input type='text'
            onChange={e => setUsername(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type='password'
            onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type='submit' onClick={buttonHandler}>Зайти</button>
          </div>
        </form>
    </div>
  )
}

export default AuthentificationForm