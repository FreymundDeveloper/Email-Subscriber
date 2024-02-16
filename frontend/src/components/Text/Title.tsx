import React from 'react';
import styled from 'styled-components';

interface TitleProps {
    text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
    return <StyledTitle>{text}</StyledTitle>;
}

const StyledTitle = styled.label`
    display: block;
    margin: 0px 0px 10px 10px;
    color: #fff;
    text-align: left;

    @media (max-width: 548px) {
        text-align: center;
        margin-left: 0px;
    }
`;