import styled from "styled-components";
import { Button } from "../../shared/styles/buttons";

const Container = styled.div`
    border-radius: 5px;
    border: 2px solid #ccc;
    height: 300px;
    width: 80%;

    @media screen and (min-width: 600px) {
        width: 500px;
    }
`;

const ImageLink = styled.div`
    border: 1px solid orange;
    cursor: pointer;
    height: 80%;
    width: 100%;
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
        background-color: var(--color-primary);
        color: white;
    }
`;

type MealPlanRecipePreviewProps = {
    chosenRecipe?: boolean;
}


const MealPlanRecipePreview = ({ chosenRecipe = false }) => {
    return (
        <>
            {chosenRecipe &&
            <Container>
                <ImageLink>
                    image
                </ImageLink>
                <TextContent>Tacos</TextContent>
            </Container>
            }
            <ChooseButton>
                {chosenRecipe ? "Change recipe" : "Choose a recipe" }
            </ChooseButton>
        </>
    );
}

export default MealPlanRecipePreview;