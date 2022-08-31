import { useState, useCallback, useEffect } from "react";
import { ApplyToken } from '../contexts/axiosContext';

function useAuthentification() {
    const [username, setUsername] = useState('');
    const [token, setToken] = useState(null);

    const login = useCallback((jwtToken, username) => {
        setToken(jwtToken);
        setUsername(username);
        ApplyToken(jwtToken);
        localStorage.setItem('signaturewatch', JSON.stringify({
            username: username,
            token: jwtToken
        }));
    }, []);

    function logout() {
        setUsername('');
        setToken(null);
        localStorage.removeItem('signaturewatch');
        window.location.reload();
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('signaturewatch'));
        if (data && data.token) {
            login(data.token, data.username)
            ApplyToken(data.token);
        }
    }, [login]);

    return ({ login, logout, username, token });
};

export { useAuthentification };