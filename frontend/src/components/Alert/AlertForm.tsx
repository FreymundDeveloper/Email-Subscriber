import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { handleTimeout } from '../../utils/utilsTimer';

interface AlertFormProps {
    submitCall: string;
}

export const AlertForm: React.FC<AlertFormProps> = ({ submitCall }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    useEffect(() => {
        if (submitCall !== 'hidden') {
            setIsVisible(true);

            return handleTimeout(2000, setIsVisible, false);
        }
    }, [submitCall]);

    useEffect(() => {
        if (submitCall === 'success') setAlertMessage('Email registered successfully!');
        else if (submitCall === 'errorFormat') setAlertMessage('Email format error!');
        else setAlertMessage('Error, email already exists!');
    }, [submitCall]);

    return (isVisible && submitCall !== 'hidden') ? (
        <StyledAlert isError={submitCall !== 'success'}>{alertMessage}</StyledAlert>
    ) : null;
}

const StyledAlert = styled.div<{ isError: boolean }>`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ isError }) => isError ? ((props) => props.theme.color.errorAlertColor) : ((props) => props.theme.color.successAlertColor)};
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
`;
