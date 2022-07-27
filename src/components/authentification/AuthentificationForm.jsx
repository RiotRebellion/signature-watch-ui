import React, { useContext, useState, useEffect } from 'react';
import { axiosContext } from '../../contexts/AxiosContext';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './AuthentificationForm.module.css';

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
        <div 
            className={styles.container}>
            <div>
                Реестр ИБИДО
            </div>
            <p>
                {authenftificationException}
            </p>
            <div 
                className={styles.AuthentificationForm}>
                <form 
                    onSubmit={e => e.preventDefault()}>
                    <div 
                        className={styles.loginInput}>
                        <p>
                            {usernameValidationException}
                        </p>
                        <p>
                            Username
                        </p>
                        <input 
                            type='text' 
                            onChange={e => setUsername(e.target.value)} />   
                    </div>
                    <div 
                        className={styles.passwordInput}>
                        <p>
                            Password
                        </p>
                        <input 
                            type='password'
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button 
                            type='submit' 
                            onClick={Authentificate}>
                            Зайти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuthentificationForm