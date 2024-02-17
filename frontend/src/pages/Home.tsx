import React, { useState } from 'react';
import { AlertForm, ContainerHome, Form } from '../components';
import { postCallEmail } from '../service/apiService';
import { handleTimeout } from '../utils/utilsTimer';

export const Home: React.FC = () => {
    const [showAlert, setShowAlert] = useState<string>("hidden");

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = async (inputValue: string) => {
        try {
            if (!emailFormat.test(inputValue)) setShowAlert("errorFormat");
            else {
                await postCallEmail(inputValue);
                setShowAlert("success");
                console.log('Post call made successfully!');
            }
            
        } catch (error) {
            setShowAlert("errorSystem");
            console.error('Error when making the post call:', error);
        }

        return handleTimeout(1500, setShowAlert, 'hidden');
    };
    
    return (
        <ContainerHome>
            <Form onSubmit={handleSubmit}></Form>
            <AlertForm submitCall={showAlert} />
        </ContainerHome>
    );
}
