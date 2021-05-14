import { useState } from "react";
import { Label } from "../../shared/styles/forms";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Ingredient } from "../../shared/types/Ingredient";

const Container = styled.div`
    position: relative;
`;

const InputContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-top: 10px;
`;

const Input = styled.input`
    border-radius: 5px;
    border: 1px solid #111;
    outline: none;
    height: 38px;
    font-size: 2.2rem;
    padding-left: 5px;
`;

const FormControl = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    align-self: flex-end;
    background-color: #1D8F52;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    height: 40px;
    outline: none;
    padding: 0px 10px;
`;

type IngredientInputProps = {
    ingredients: Ingredient[];
    addIngredient(ingredient: Ingredient): void;
}

 
const IngredientInput = ({ ingredients, addIngredient }: IngredientInputProps) => {
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
                    <select name="unit" value={unit} onChange={handleChange} id="unit">
                        <option value=""></option>
                        <option value="CUP">CUP</option>
                        <option value="LB">LB</option>
                        <option value="G">G</option>
                    </select>
                </FormControl>

                <Button type="button" onClick={handleNewIngredient}>Add</Button>
            </InputContainer>
        </Container>
    );
};

export default IngredientInput;