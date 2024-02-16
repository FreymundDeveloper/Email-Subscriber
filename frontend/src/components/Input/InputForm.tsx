import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputFormProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ type, placeholder, value, onChange }) => {
    return <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}

const Input = styled.input`
    width: 90%;
    padding: 12px;
    margin: 2px;
    border-radius: 10px;
`;