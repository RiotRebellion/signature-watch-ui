import React, { useContext, useState, useEffect } from 'react';
import { axiosContext } from '../../contexts/AxiosContext';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './AuthentificationForm.module.css';

function AuthentificationForm(props) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [authenftificationException, setAuthenftificationException] = useState();

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
                console.log(validationErrors);
                setAuthenftificationException(validationErrors["Username"]);
            });
    };

    useEffect(() => {
        setAuthenftificationException('');
    }, [username] 
    )

    return (
        <div className={styles.container}>
            <div className={styles.authentificationForm}>
                <div className={styles.title}>
                    Реестр ИБИДО
                </div>
                <div className={styles.exceptions}>
                    <p>
                        {authenftificationException}
                    </p>
                </div>
                <form onSubmit={e => e.preventDefault()}>
                    <div className={styles.loginInput}>
                        <input 
                            placeholder='Логин'
                            type='text' 
                            onChange={e => setUsername(e.target.value)} />   
                    </div>
                    <div className={styles.passwordInput}>
                        <input 
                            placeholder='Пароль'
                            type='password'
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className={styles.submitButton}>
                        <button 
                            type='submit' 
                            onClick={Authentificate}>
                            Авторизоваться
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuthentificationForm