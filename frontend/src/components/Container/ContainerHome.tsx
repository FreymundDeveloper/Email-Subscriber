import React from 'react';
import styled from 'styled-components';

interface ContainerHomeProps {
    children: React.ReactNode;
}

export const ContainerHome: React.FC<ContainerHomeProps> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50vh;
`;