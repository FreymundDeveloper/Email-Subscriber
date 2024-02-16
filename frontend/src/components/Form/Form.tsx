import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { ButtonAction, InputForm, Title } from '../../components';

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
                <Title text={"Type your e-mail"} />
                <InputForm type={"text"} placeholder={"exemple@mail.com"} value={inputValue} onChange={handleChange} />
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

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 548px) {
        flex-direction: column;
        justify-content: center;
    }
`;