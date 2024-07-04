import axios from 'axios';
import toast from "react-hot-toast";
import { handleLoginError } from '../utils/validator';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';


const BASE_URL = import.meta.env.VITE_SERVER_URL;

const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()

    const login = async (email, password) => {
        const success = handleLoginError({ email, password })
        if (!success) {
            return
        }
        setLoading(true)
        try {
            const res = await axios.post(`${BASE_URL}/api/auth/login`, {
                email,
                password,
            });
            const { token } = res.data;

            if (token) {
                console.log(token);
                localStorage.setItem('user-jwt-token', token);
                setAuthUser(token)
            }
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                toast.error(error.response.data.error)

            } else if (error.request) {
                console.error('Error request:', error.request);

            } else {
                console.error('Error message:', error.message);
            }
        }finally{
            setLoading(false)
        }
    };

    return { login,loading };
};

export default useLogin;
