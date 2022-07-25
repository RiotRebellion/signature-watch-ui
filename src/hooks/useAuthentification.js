import { useState, useCallback, useEffect } from "react";

function useAuthentification() {
    const [status, setStatus] = useState(false)
    const [token, setToken] = useState(null);

    const login = useCallback((jwtToken) => {
        setToken(jwtToken)
        setStatus(true)
        localStorage.setItem('User-Data', JSON.stringify({
            token: jwtToken,
        }));
    }, [])

    function logout() {
        setToken(null)
        setStatus(false);
        localStorage.removeItem('User-Data');
        window.location.reload();
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('User-Data'));
        if (data && data.token) {
            login(data.token)
        }
        setStatus(true);
    }, [login])

    return { login, logout, token, status }
};

export { useAuthentification };