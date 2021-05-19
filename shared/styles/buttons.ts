import styled from "styled-components";

export const Button = styled.button`
    background-color: var(--color-primary);
    border-radius: 50px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
    height: 50px;
    margin: 10px 0px;
    width: 100%;

    &:hover {
        background-color: var(--color-hover);
    }
`;

export const AddButton = styled.button`
    background-color: var(--color-primary);
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    cursor: pointer;
    outline: none;
    position: absolute;
    height: 3.5rem;
    right: 0;
    top: 40px;
    width: 100px;
    &:hover {
        background-color: var(--color-hover);
    }
`;