import axios from 'axios';
import toast from "react-hot-toast";
import { handleLoginError } from '../utils/validator';


const BASE_URL = import.meta.env.VITE_SERVER_URL;

const useLogin = () => {
    const login = async (email, password) => {

        const success = handleLoginError({ email, password })
        if (!success) {
            return
        }
        try {
            const res = await axios.post(`${BASE_URL}/api/auth/login`, {
                email,
                password,
            });

            console.log('Response:', res.data);

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Error response:', error.response.data);
                toast.error(error.response.data.error)

            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);

            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    };

    return { login };
};

export default useLogin;
