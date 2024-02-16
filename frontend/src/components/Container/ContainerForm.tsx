import React from 'react';
import styled from 'styled-components';

interface ContainerFormProps {
    children: React.ReactNode;
}

export const ContainerForm: React.FC<ContainerFormProps> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
    text-align: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.formColor};
    border-radius: 10px;
`;