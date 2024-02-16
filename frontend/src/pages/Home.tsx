import React from 'react';
import { ContainerHome, Form } from '../components';

export const Home: React.FC = () => {

    const handleSubmit = (inputValue: string) => {
        console.log('Post', inputValue);
    };
    
    return (
        <ContainerHome>
            <Form onSubmit={handleSubmit}></Form>
        </ContainerHome>
    );
}