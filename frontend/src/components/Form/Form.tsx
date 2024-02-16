import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { ButtonAction, ContainerButton, ContainerForm, InputForm, Title } from '../../components';

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
        <ContainerForm>
            <FormContent onSubmit={handleSubmit}>
                <Title text={"Type your e-mail"} />
                <InputForm type={"text"} placeholder={"exemple@mail.com"} value={inputValue} onChange={handleChange} />
                <ContainerButton>
                    <ButtonAction type="submit">Submit</ButtonAction>
                    <ButtonAction type="button" onClick={handleClear}>Clear</ButtonAction>
                </ContainerButton>
            </FormContent>
        </ContainerForm>
    );
}

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