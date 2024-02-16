import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    type: "submit" | "button";
    onClick?: () => void;
    children: React.ReactNode;
}

export const ButtonAction: React.FC<ButtonProps> = ({ type, onClick, children }) => {
    return (
        <StyledButton type={type} onClick={onClick}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    margin-right: 10px;
    padding: 8px 20px;
    border: none;
    background-color: ${(props) => props.theme.color.buttonColor};
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => darken(0.1, props.theme.color.buttonColor)};
    }
`;