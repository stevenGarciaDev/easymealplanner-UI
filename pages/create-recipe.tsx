import { useState } from "react";
import { FormControl } from "../shared/styles/forms";
import styled from "styled-components";
import { Label, Input } from "../shared/styles/forms";
import IngredientInput from "../components/IngredientInput";
import IngredientFormList from "../components/IngredientFormList";
import Instruction from "../components/Instruction";
import { Ingredient } from "../shared/types/Ingredient";
import { Instruction as InstructionType } from "../shared/types/Instruction";
import { Button as SubmitButton, AddButton } from "../shared/styles/buttons";

import { createRecipeAsync } from "../services/recipeService";

const Page = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 100px;
    min-height: calc(100vh);
    width: 100%:

    @media screen and (min-width: 1200px) {
        margin-top: 10%;
    }
`;

const Headline = styled.h1`
    font-size: 3rem;
`;

const RecipeForm = styled.form`
    font-size: 3rem;
    width: 80%;

    @media screen and (min-width: 1200px) {
        max-width: 800px;
    }
`;

const InstructionsContainer = styled.div`
    margin-top: 30px;
`;

const AddInstructionButton = styled(AddButton)`
    background-color: #1D8F52;
`;

const ImageInput = styled.input`
    border-radius: 5px;
    border: 1px solid #111;
    display: block;
    width: 100%;
`;

const CreateRecipe = () => {
    const [recipeForm, setRecipeForm] = useState({
        name: '',
        description: '',
        currentInstruction: '',
        image: ''
    });
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [instructions, setInstructions] = useState<string[]>([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipeForm(
            {...recipeForm, [name]: value }
        );
    }

    const addIngredient = (ingredient: Ingredient) => {
        const updatedIngredients = [ ingredient, ...ingredients ];
        setIngredients(updatedIngredients);
    }

    const removeIngredient = (name: string) => {
       const updatedIngredients = ingredients.filter((i) => i.ingredientName != name);
       setIngredients(updatedIngredients);
    }

    const addInstruction = () => {
        const { currentInstruction } = recipeForm;
        if (!currentInstruction) return;
        setInstructions([...instructions, currentInstruction]);
        setRecipeForm({...recipeForm, currentInstruction: '' });
    }

    const keyPressAddInstruction = (e) => {
        if (e.key === 'Enter') {
            addInstruction();
        }
    }

    const removeInstruction = (name: string) => {
        const updatedInstructions = instructions.filter((i) => i !== name);
        setInstructions(updatedInstructions);
    }

    const isValidForSubmission = () => {
        const { name, description, image } = recipeForm;

        return (name.length > 0 
            && description.length > 0
            && instructions.length > 0
            && ingredients.length > 0
            && image.length > 0)
            ? true : false;
    }

    const resetAllFields = () => {
        setRecipeForm({
            name: '',
            description: '',
            currentInstruction: '',
            image: ''
        });
        setIngredients([]);
        setInstructions([]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidForSubmission()) {
            return;
        }
        const { name, description, image } = recipeForm;

        await createRecipeAsync({
            name,
            description,
            instructions,
            ingredients,
            image
        });

        resetAllFields();
    }

    const { name, description, currentInstruction } = recipeForm;
    return (
        <Page>
            <Headline>Create a New Recipe</Headline>
            <RecipeForm onSubmit={handleSubmit}>
                <FormControl>
                    <Label htmlFor="name">Recipe Name</Label>
                    <Input type="text" name="name" id="name" value={name} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <Label htmlFor="description">Description</Label>
                    <Input type="text" name="description" id="description" value={description} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <Label>List the ingredients needed for one serving.</Label>
                    <IngredientInput
                        ingredients={ingredients}
                        addIngredient={addIngredient}
                    />
                    <IngredientFormList ingredients={ingredients} removeIngredient={removeIngredient} />
                </FormControl>
                <FormControl>
                    <Label htmlFor="currentInstruction">Specify the Instructions</Label>
                    <Input
                        type="text"
                        name="currentInstruction"
                        id="currentInstruction"
                        value={currentInstruction}
                        onKeyPress={keyPressAddInstruction}
                        onChange={handleChange}
                    />
                    <AddInstructionButton type="button" onClick={addInstruction}>Add</AddInstructionButton>
                    <InstructionsContainer>
                        {instructions.map((instruction, index) => {
                            const stepNumber = index + 1;
                            return (
                                <Instruction
                                    key={`${stepNumber}${description}`}
                                    stepNumber={stepNumber}
                                    description={instruction}
                                    remove={removeInstruction}
                                />
                            );
                        })}
                    </InstructionsContainer>
                </FormControl>
                <FormControl>
                    <Label htmlFor="image">Add an Image</Label>
                    <ImageInput type="file" name="image" id="image" accept="image/*" onChange={handleChange} />
                </FormControl>
                <SubmitButton type="submit">Create Recipe</SubmitButton>
            </RecipeForm>
        </Page>
    );
};

export default CreateRecipe;