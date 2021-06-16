import {
    Container,
    ImageLink,
    ImageContainer,
    TextContainer,
    TextContent,
} from "../../shared/styles/recipePreview";
import styled from "styled-components";
import { Button } from "../../shared/styles/buttons";
import { useSelector } from "react-redux";
import Router from "next/router";
import { selectMealPlanId } from "../../store/meal-plan/meal-plan.selectors";

const Preview = styled.div`
    margin-bottom: 70px;
    height: 370px;
    min-width: 300px;
`;

const ChoosenImageContainer = styled(ImageContainer)`
    cursor: auto;
`;

const ChoosenRecipeTextContainer = styled(TextContainer)`
    display: flex;
`;

const ChooseButton = styled(Button)`
    background-color: white;
    border: #111;
    border: 1px solid #111;
    color: #111;

    &:hover {
        background-color: var(--color-primary);
        border: none;
        color: white;
    }
`;

type ChooseRecipePreviewProps = {
    recipeId: number;
    name: string;
    imageLink: string;
    dayOfTheWeek: string;
    recipeNumber: number;
    updateMealPlan: any;
}

const ChooseRecipePreview = ({
    recipeId,
    name,
    imageLink,
    dayOfTheWeek,
    recipeNumber,
    updateMealPlan
}: ChooseRecipePreviewProps) => {
    const mealPlanId = useSelector(selectMealPlanId);

    const handleClick = async () => {
        await updateMealPlan(mealPlanId, recipeId, dayOfTheWeek, recipeNumber);
    }

    return (
        <Preview>
            <Container>
                <ChoosenImageContainer
                    src={`https://easymealplanner.s3-us-west-1.amazonaws.com/${recipeId}/${imageLink}`}
                    alt={name}
                />
                <ChoosenRecipeTextContainer>
                    <TextContent>
                        {name}
                    </TextContent>
                </ChoosenRecipeTextContainer>
            </Container>
            <ChooseButton type="button" onClick={handleClick}>Choose</ChooseButton>
        </Preview>
    );
}

export default ChooseRecipePreview;