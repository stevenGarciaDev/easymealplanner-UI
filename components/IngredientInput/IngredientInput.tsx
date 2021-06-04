import { useState } from "react";
import { Label } from "../../shared/styles/forms";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Ingredient } from "../../shared/types/Ingredient";
import {
    Container,
    InputContainer,
    Input,
    Select,
    FormControl
} from "../../shared/styles/horizontalFormInputFields";

const Button = styled.button`
    align-self: flex-end;
    background-color: var(--color-primary);
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    height: 3.5rem;
    outline: none;
    padding: 0px 10px;
    &:hover {
        background-color: var(--color-hover):
    }
`;

type IngredientInputProps = {
    ingredients: Ingredient[];
    addIngredient(ingredient: Ingredient): void;
    possibleUnits: string[];
}

 
const IngredientInput = ({ ingredients, addIngredient, possibleUnits }: IngredientInputProps) => {
    const [ingredient, setIngredient] = useState({
        ingredientName: '',
        unit: '',
        quantity: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;

        if (name === 'quantity' && (value < 0 || value > 25)) {
            return;
        }

        setIngredient({ ...ingredient, [name]: value });
    };

    const isValidIngredient = () => {
        const { ingredientName, unit, quantity } = ingredient;
        return (ingredientName.length > 0 && (quantity > 0 && quantity <= 25) && unit != '') ? true : false;
    }

    const handleNewIngredient = () => {
        if (isValidIngredient()) {
            addIngredient({
                ingredientName: ingredientName.toLowerCase(),
                quantity,
                unit: unit.toLowerCase()
            });
            setIngredient({
                ingredientName: '',
                unit: '',
                quantity: 0
            });
        }
    }

    const { ingredientName, unit, quantity } = ingredient;
    return (
        <Container>            
            <InputContainer>
                <FormControl>
                    <Label htmlFor="ingredientName">Name</Label>
                    <Input type="text" name="ingredientName" value={ingredientName} onChange={handleChange} id="ingredientName" />
                </FormControl>

                <FormControl>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input type="number" name="quantity" value={quantity} onChange={handleChange} id="quantity" />
                </FormControl>
                
                <FormControl>
                    <Label htmlFor="unit">Unit</Label>
                    <Select name="unit" value={unit} onChange={handleChange} id="unit">
                        <option value=""></option>
                        {possibleUnits.map(u => <option key={u} value={u}>{u.toLowerCase()}</option>)}
                    </Select>
                </FormControl>

                <Button type="button" onClick={handleNewIngredient}>Add</Button>
            </InputContainer>
        </Container>
    );
};

export default IngredientInput;