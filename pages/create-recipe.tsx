import { useState, useEffect } from "react";
import Head from 'next/head';
import { FormControl } from "../shared/styles/forms";
import styled from "styled-components";
import { Label, Input } from "../shared/styles/forms";
import IngredientInput from "../components/IngredientInput";
import IngredientFormList from "../components/IngredientFormList";
import Instruction from "../components/Instruction";
import ImageDropzone from "../components/ImageDropzone";
import { Ingredient } from "../shared/types/Ingredient";
import { Button as SubmitButton, AddButton } from "../shared/styles/buttons";

import { createRecipeAsync } from "../services/recipeService";
import { getPossibleUnitsAsync } from "../services/recipeIngredientService";

const Page = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 50px;
    min-height: calc(100vh);
    width: 100%;

    @media screen and (min-width: 1200px) {
        margin-top: 7%;
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
    background-color: var(--color-primary);
    font-size: 2.3rem;
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
        currentInstruction: ''
    });
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [instructions, setInstructions] = useState<string[]>([]);
    const [possibleUnits, setUnits] = useState<string[]>([]);
    const [image, setImage] = useState<File>(null);

    useEffect(() => {       
        getPossibleUnitsAsync()
            .then(units => {
                console.log("units", units);
                setUnits(units);
            })
            .catch(error => setUnits([]));
    }, []);

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
        const { name, description } = recipeForm;

        return (name.length > 0 
            && description.length > 0
            && instructions.length > 0
            && ingredients.length > 0
            && image != null)
            ? true : false;
    }

    const resetAllFields = () => {
        setRecipeForm({
            name: '',
            description: '',
            currentInstruction: '',
        });
        setImage(null);
        setIngredients([]);
        setInstructions([]); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidForSubmission()) {
            return;
        }
        const { name, description } = recipeForm;

        await createRecipeAsync({
            name,
            description,
            ingredients,
            instructions,
        });

        resetAllFields();
    }

    const { name, description, currentInstruction } = recipeForm;
    return (
        <>
            <Head>
                <title>EasyMealPlanner | Create Recipe</title>
            </Head>
            <Page>
                <Headline>Create a New Recipe</Headline>
                <RecipeForm onSubmit={handleSubmit} encType="multipart/form-data">
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
                            possibleUnits={possibleUnits}
                        />
                        <IngredientFormList ingredients={ingredients} removeIngredient={removeIngredient} />
                    </FormControl>
                    <FormControl>
                        <Label htmlFor="currentInstruction">Specify the instructions</Label>
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
                        <ImageDropzone file={image} setImage={setImage} />
                    </FormControl>
                    <SubmitButton type="submit">Create Recipe</SubmitButton>
                </RecipeForm>
            </Page>
        </>
    );
};

CreateRecipe.requireAuth = true;

export default CreateRecipe;