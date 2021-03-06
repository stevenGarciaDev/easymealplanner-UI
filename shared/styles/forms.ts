import styled from "styled-components";

export const AuthForm = styled.form`
    width: 80%;

    @media screen and (min-width: 800px) {
        max-width: 350px;
    }
`;

export const FormHeadline = styled.h1`
    font-size: 3rem;
    margin: 0;
`;

export const FormSubheadline = styled.h2`
    color: #555;
    font-size: 2rem;
    text-align: center;
`;

export const FormControl = styled.div`
    margin: 15px 0px;
    position: relative;
`;

export const Label = styled.label`
    display: inline-block;
    font-size: 2.2rem;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    border-radius: 5px;
    border: 1px solid #111;
    font-size: 2rem;
    height: 3.5rem;
    outline: none;
    padding-left: 10px;
    position: relative;
    width: 100%;
`;