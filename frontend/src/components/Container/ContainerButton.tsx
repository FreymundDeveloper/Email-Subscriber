import React from 'react';
import styled from 'styled-components';

interface ContainerButtonProps {
    children: React.ReactNode;
}

export const ContainerButton: React.FC<ContainerButtonProps> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 548px) {
        flex-direction: column;
        justify-content: center;
    }
`;