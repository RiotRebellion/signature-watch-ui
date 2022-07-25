import React, { useContext, useState } from 'react';
import { axiosContext } from '../../contexts/AxiosContext';
import { AuthContext } from '../../contexts/AuthContext';
import { useAuthentification } from '../../hooks/useAuthentification'

function AuthentificationForm(props) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const { login } = useContext(AuthContext);

    const authentificate = async function () {
        try {
            await axiosContext.post('/authentification/login', [username, password], {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.data.isSuccess) {
                    login(token)
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3>Реестр ИБИДО</h3>
            <form>
                <label>
                    <p>Username</p>
                    <input type='text'
                        onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type='password'
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type='submit' onClick={authentificate}>Зайти</button>
                </div>
            </form>
        </div>
    )
}

export default AuthentificationForm