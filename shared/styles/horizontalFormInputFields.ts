import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const InputContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    margin-top: 10px;

    @media screen and (min-width: 800px) {
        grid-template-columns: 2fr 1fr 1fr 1fr;
    }
`;

export const Input = styled.input`
    border-radius: 5px;
    border: 1px solid #111;
    outline: none;
    height: 3.5rem;
    font-size: 2.2rem;
    padding-left: 5px;
`;

export const Select = styled.select`
    border-radius: 5px;
    border: 1px solid #111;
    height: 3.5rem;
    outline: none;
`;

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
`;