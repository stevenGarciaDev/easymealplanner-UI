import { useState } from "react";
import styled from "styled-components";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

const Item = styled.div`
    align-items: center;
    border: 1px solid #ccc;
    color: #222;
    display: flex;
    font-size: 2.5rem;
    padding: 5px;
`;

const CheckedIcon = styled(ImCheckboxChecked)`
    color: var(--color-primary);
    cursor: pointer;
    margin-right: 5px;
`;

const UncheckedIcon = styled(ImCheckboxUnchecked)`
    color: var(--color-primary);
    cursor: pointer;
    margin-right: 5px;
`;

type TextProps = {
    isChecked: boolean;
};

const Text = styled.p<TextProps>`
    color: ${props => props.isChecked ? "#a6a6a6" : "#222"};
    font-style: ${props => props.isChecked ? "italic" : "normal"};
    margin: 0;
    text-decoration: ${props => props.isChecked ? "line-through" : "none"};
`;

type GroceryListItemProps = {
    isChecked: boolean;
    name: string;
};

const GroceryListItem = ({ isChecked, name}: GroceryListItemProps) => {
    return (
        <Item>
            {isChecked ? <CheckedIcon /> : <UncheckedIcon />}
            <Text isChecked={isChecked}>{name}</Text>
        </Item>
    );
}

export default GroceryListItem;