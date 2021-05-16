import styled from "styled-components";

export const Button = styled.button`
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid #111;;
    color: black;
    cursor: pointer;
    height: 50px;
    margin: 10px 0px;
    width: 100%;

    &:hover {
        background-color: #1D8F52;
        border: none;
        color: #fff;
    }
`;

export const AddButton = styled.button`
    background-color: #1D8F52;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    cursor: pointer;
    outline: none;
    position: absolute;
    height: 5rem;
    right: 0;
    width: 100px;
    &:hover {
        background-color: #006600;
    }
`;