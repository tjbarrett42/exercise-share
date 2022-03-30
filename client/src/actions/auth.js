import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';
import { useNavigate } from 'react-router-dom';

export const signin = (formData, navigate) => async (dispatch) => {
    // navigate = useNavigate();


    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        //router.push('/');
        navigate("/");
    } catch ( error ) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    // navigate = useNavigate();


    try {
        // signup user
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        //router.push('/');
        navigate("/");
    } catch ( error ) {
        console.log(error);
    }
}