import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { ButtonAction } from '../../components';

interface FormProps {
  onSubmit: (inputValue: string) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState<string>("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    const handleClear = () => {
        setInputValue('');
    };

    return (
        <FormContainer>
            <FormContent onSubmit={handleSubmit}>
                <Title>Type your e-mail</Title>
                <Input type="text" placeholder="exemple@mail.com" value={inputValue} onChange={handleChange} />
                <ButtonContainer>
                    <ButtonAction type="submit">Submit</ButtonAction>
                    <ButtonAction type="button" onClick={handleClear}>Clear</ButtonAction>
                </ButtonContainer>
            </FormContent>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    text-align: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.formColor};
    border-radius: 10px;
`;

const FormContent = styled.form`
    width: 450px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;

    @media (max-width: 548px) {
        width: 350px;
        height: 200px;
    }
`;

const Title = styled.label`
    display: block;
    margin: 0px 0px 10px 10px;
    color: #fff;
    text-align: left;

    @media (max-width: 548px) {
        text-align: center;
        margin-left: 0px;
    }
`;

const Input = styled.input`
    width: 90%;
    padding: 12px;
    margin: 2px;
    border-radius: 10px;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 548px) {
        flex-direction: column;
        justify-content: center;
    }
`;