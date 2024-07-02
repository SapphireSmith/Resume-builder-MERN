import axios from 'axios';
import { handleRegisterError } from '../utils/validator';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const useRegister = () => {
    const register = async (name, email, password, confirmPassword) => {

        const success = handleRegisterError({ name, email, password, confirmPassword })
        if (!success) {
            return;
        }

        try {
            const res = await axios.post(`${BASE_URL}/api/auth/register`, {
                name,
                email,
                password,
                confirmPassword,
            });

            console.log('Response:', res.data);

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    };

    return { register };
};

export default useRegister;
