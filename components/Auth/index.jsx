import React, { useEffect } from 'react'
import { message } from 'antd';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/userState';
import apiService from '../../utils/api/apiService';

export default function Auth({ children }) {
    const setUser = useSetRecoilState(userState);

    const handleCheckLogined = async () => {
        const key = "login";
        try {
            const response = await apiService.get('/users/me');
            setUser(response.data);
        } catch (error) {
            // message.error({ content: error.response.data.message, key })
            setUser({})
        }
    }

    useEffect(() => {
        handleCheckLogined();
    }, [])
    return (
        <>
            {children}
        </>
    )
}
