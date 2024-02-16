import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { AlertForm, ButtonAction, ContainerButton, ContainerForm, InputForm, Title } from '../../components';

interface FormProps {
    onSubmit: (inputValue: string) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [showAlert, setShowAlert] = useState<string>("hidden");

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setShowAlert("hidden");
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!emailFormat.test(inputValue)) setShowAlert("error");
        else {
            setShowAlert("success");
            onSubmit(inputValue);
            setInputValue('');
        }

        if ( showAlert !== "hidden") setShowAlert("hidden");
    };

    const handleClear = () => {
        setInputValue('');
        setShowAlert("hidden");
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
                <AlertForm submitCall={showAlert} />
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