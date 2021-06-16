import styled from "styled-components";
import Link from "next/link";
import { Button } from "../../shared/styles/buttons";
import { ImageContainer } from "../../shared/styles/recipePreview";

const Container = styled.div`
    border-radius: 5px;
    border: 2px solid #ccc;
    height: 300px;
    width: 80%;

    @media screen and (min-width: 600px) {
        width: 500px;
    }
`;

const TextContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    font-family: 'Amaranth', sans-serif;
    font-size: 2.5rem;
    height: 20%;
    margin-left: 10px;
    width: 100%;
`;

const ChooseButton = styled(Button)`
    border: 1px solid #333;
    background-color: white;
    color: #333;
    width: 80%;

    @media screen and (min-width: 600px) {
        width: 500px;
    }

    &:hover {
        border: none;
        background-color: var(--color-primary);
        color: white;
    }
`;

type MealPlanRecipePreviewProps = {
    recipeForMeal: any;
    currentDay: string;
    mealNumber: number;
}

const MealPlanRecipePreview = ({ recipeForMeal, currentDay, mealNumber }) => {

    const recipe = recipeForMeal ? recipeForMeal.recipe : null;
    return (
        <>
            {recipe &&
                <Container>
                    <Link href={`/recipe-detail/${recipe.id}/${recipe.name}`} passHref>
                        <ImageContainer
                            src={`https://easymealplanner.s3-us-west-1.amazonaws.com/${recipe.id}/${recipe.recipeImages[0].imageLink}`}
                            alt={recipe.name}
                        />
                    </Link>
                    <TextContent>{recipe.name}</TextContent>
                </Container>    
            }
            <Link href={`/choose-recipe/${currentDay}/${mealNumber}`} passHref>
                <ChooseButton>
                    {recipe ? "Change recipe" : "Choose a recipe" }
                </ChooseButton>
            </Link>
        </>
    );
}

export default MealPlanRecipePreview;