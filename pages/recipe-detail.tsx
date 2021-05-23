import styled from "styled-components";
import { Button } from "../shared/styles/buttons";
import ServingSizeAdjuster from "../components/ServingSizeAdjuster";

const Page = styled.div`
    min-height: 100vh;
    padding-bottom: 150px; 

    @media screen and (min-width: 800px) {
        padding: 20px 20px 70px 20px;
    }
`;

const Headline = styled.h1`
    font-size: 3rem;
    margin-bottom: 50px;
    text-align: center;
`;

const Section = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    text-align: center;
`;

const RecipeDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0px 10px;
    width: 80%;

    @media screen and (min-width: 800px) {
        margin-bottom: 0px;
        width: 50%;
    }
`;

const RecipeImageContainer = styled.div`
    border-radius: 5px;
    border: 2px solid #999;
    height: 100%;
`;

const SaveButton = styled(Button)`

`;

const NutrientBreakdownContainer = styled.div`
    border: 2px solid #ccc;
    display: flex;
    height: 350px;
    justify-content: center;
    padding: 0px 10px;
    width: 80%;

    @media screen and (min-width: 800px) {
        width: 50%;
    }
`;

const IngredientsContainer = styled.div`
    border: 2px solid #ccc;
    margin-bottom: 20px;
    padding: 0px 10px;
    width: 80%;
`;

const IngredientsList = styled.ul`
    font-size: 2.5rem;
`;

const IngredientItem = styled.li`
    list-style-type: disc;
    margin: 10px 0px;
`;

const DirectionsContainer = styled.div`
    border: 2px solid #ccc;
    padding: 0px 10px;
    width: 80%;
`;

const DirectionsList = styled.ol`
    font-size: 2.5rem;
`;

const DirectionItem = styled.li`
    margin: 30px 0px;
`;

const RecipeDetail = () => {
    return (
        <Page>
            <Headline>Beef Taco Recipe Name</Headline>
            <Section>
                <RecipeDisplayContainer>
                    <RecipeImageContainer>RecipeContainer</RecipeImageContainer>
                    <SaveButton>Save Recipe</SaveButton>
                </RecipeDisplayContainer>
            </Section>
            <Section>
                <IngredientsContainer>
                    <SectionTitle>Ingredients</SectionTitle>
                    <ServingSizeAdjuster />
                    <IngredientsList>
                        <IngredientItem>Apple</IngredientItem>
                        <IngredientItem>Banana</IngredientItem>
                        <IngredientItem>Chocolate</IngredientItem>
                        <IngredientItem>More Chocolate</IngredientItem>
                    </IngredientsList>
                </IngredientsContainer>
            </Section>
            <Section>
                <DirectionsContainer>
                    <SectionTitle>Directions</SectionTitle>
                    <DirectionsList>
                        <DirectionItem>Step 1</DirectionItem>
                        <DirectionItem>Step 2</DirectionItem>
                        <DirectionItem>Step 3</DirectionItem>
                        <DirectionItem>Step 4</DirectionItem>
                        <DirectionItem>Step 5</DirectionItem>
                    </DirectionsList>
                </DirectionsContainer>
            </Section>
            <Section>
                <NutrientBreakdownContainer>
                    <SectionTitle>Macronutrient breakdown</SectionTitle>
                </NutrientBreakdownContainer>
            </Section>
        </Page>
    );
}

export default RecipeDetail;