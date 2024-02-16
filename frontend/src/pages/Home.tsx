import React from 'react';
import styled from 'styled-components';
import { Form } from '../components';

export const Home: React.FC = () => {

    const handleSubmit = (inputValue: string) => {
        console.log('Post', inputValue);
    };
    
    return (
        <AppContainer>
            <Form onSubmit={handleSubmit}></Form>
        </AppContainer>
    );
  }

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50vh;
`;