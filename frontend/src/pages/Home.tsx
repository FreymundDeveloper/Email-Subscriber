import { darken } from 'polished';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

export const Home: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('POST', inputValue);
    };

    const handleClear = () => {
        setInputValue('');
    };
    
    return (
      <AppContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Title>Type your e-mail</Title>
            <Input type={"text"} placeholder={"exemple@mail.com"} value={inputValue} onChange={handleChange} />
            <ButtonContainer>
              <Button type={"submit"}>Submit</Button>
              <Button type={"button"} onClick={handleClear}>Clear</Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </AppContainer>
    );
  }

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50vh;
`;

const FormContainer = styled.div`
    text-align: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.formColor};
    border-radius: 10px;
`;

const Form = styled.form`
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

const Button = styled.button`
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

    @media (max-width: 548px) {
        margin: 5px 5px 10px 5px;
        padding: 10px 20px;
    }
`;
