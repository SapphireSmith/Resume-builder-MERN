import axios from 'axios';
import { handleRegisterError } from '../utils/validator';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const useRegister = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()
    
    const register = async (name, email, password, confirmPassword) => {
        const success = handleRegisterError({ name, email, password, confirmPassword })
        if (!success) {
            return;
        }
        setLoading(true)

        try {
            const res = await axios.post(`${BASE_URL}/api/auth/register`, {
                name,
                email,
                password,
                confirmPassword,
            });

            const { token } = res.data;

            if (token) {
                localStorage.setItem('user-jwt-token', token);
                setAuthUser(token)
            }

        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        } finally {
            setLoading(false)
        }
    };

    return { register, loading };
};

export default useRegister;
