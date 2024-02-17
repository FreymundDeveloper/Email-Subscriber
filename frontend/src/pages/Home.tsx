import React, { useState } from 'react';
import { AlertForm, ContainerHome, Form } from '../components';
import axios from 'axios';

export const Home: React.FC = () => {
    const [showAlert, setShowAlert] = useState<string>("hidden");

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = async (inputValue: string) => {
        try {
            if (!emailFormat.test(inputValue)) setShowAlert("errorFormat");
            else {
                const response = await axios.post<string>('http://localhost:3001/emails', {
                    email: inputValue
                });
                setShowAlert("success");
                console.log('Post call made successfully!', response.data);
            }
            
        } catch (error) {
            setShowAlert("errorSystem");
            console.error('Error when making the post call:', error);
        }

        const timeout = setTimeout(() => {
            setShowAlert("hidden");
        }, 1500);

        return () => { clearTimeout(timeout); };
    };
    
    return (
        <ContainerHome>
            <Form onSubmit={handleSubmit}></Form>
            <AlertForm submitCall={showAlert} />
        </ContainerHome>
    );
}
