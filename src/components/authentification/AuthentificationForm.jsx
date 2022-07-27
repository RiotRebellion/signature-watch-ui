import React, { useContext, useState, useEffect } from 'react';
import { axiosContext } from '../../contexts/AxiosContext';
import { AuthContext } from '../../contexts/AuthContext';

function AuthentificationForm(props) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [authenftificationException, setAuthenftificationException] = useState([]);

    const [usernameValidationException, setUsernameValidationException] = useState('');

    const { login } = useContext(AuthContext);

    async function Authentificate() {
            await axiosContext.post('/authentification/login', {username, password},
            ).then(response => {
                if(response.data.isSuccess)
                    login(response.data.token, response.data.username);
                else
                    setAuthenftificationException(response.data.errors);
            }).catch(error => {
                let validationErrors = error.response.data.errors;
                setUsernameValidationException(validationErrors["Username"]);
            });
    };

    useEffect(() => {
        setUsernameValidationException('');
    }, [username] 
    )

    return (
        <div>
            <h3>Реестр ИБИДО</h3>
            <p>{authenftificationException}</p>
            <form onSubmit={e => e.preventDefault()}>
                <label>
                    <p>{usernameValidationException}</p>
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
                    <button type='submit' onClick={Authentificate}>Зайти</button>
                </div>
            </form>
        </div>
    );
}

export default AuthentificationForm