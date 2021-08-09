/* Core */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

/* Other */
import { api } from '../api';
import { ISignUpFormShape } from '../components/forms/SignUpForm/config';
import { useStore } from './useStore';

export const useSignUp = () => {
    const { authStore } = useStore();
    const { setToken } = authStore;
    const navigate = useNavigate();
    const mutation = useMutation((credentials: ISignUpFormShape) => {
        return api.signUp(credentials);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const token = mutation.data?.token;

            setToken(token);
            localStorage.setItem('jwt', token);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
