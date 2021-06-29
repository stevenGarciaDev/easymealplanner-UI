import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "../../../shared/styles/buttons";
import ServingSizeAdjuster from "../../../components/ServingSizeAdjuster";
import { useSelector } from "react-redux";
import { selectUserToken, selectUserId } from "../../../store/user/user.selectors";
import { selectSavedRecipeIds } from "../../../store/recipe/recipe.selectors";
import MacronutrientPieChart from "../../../components/MacronutrientPieChart";
import fracy from "fracty";
import { getRecipeByName, saveRecipeAsync, unsaveRecipeAsync } from "../../../services/recipeService";
import { setSavedRecipes } from "../../../store/recipe/recipe.actions";

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
    margin-bottom: 70px !important;
    padding: 0px 10px;
    width: 80%;

    @media screen and (min-width: 800px) {
        margin-bottom: 0px;
        width: 50%;
    }
`;

const RecipeImageContainer = styled.div`
    border-radius: 5px;
    height: 100%;
`;

const RecipeImage = styled.img`
    border-radius: 5px;
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

const SaveButton = styled(Button)`
`;

const NutrientBreakdownContainer = styled.div`
    border: 2px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    padding: 0px 10px 10px 10px;
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

const CaloriesText = styled.p`
    font-size: 2rem;
    font-style: italic;
    margin-top: 10px;
    text-align: center;
`;

type QueryParamType = {
    name: string;
}

type RecipeInfoType = {
    id: number;
    name: string;
    description: string;
    defaultServingSize: number;
    protein: number;
    carbs: number;
    fat: number;
    instructions: any[];
    recipeIngredients: any;
    recipeImages: any;
}

const RecipeDetail = () => {
    const router = useRouter();
    const { recipeId, recipeName } = router.query;
    const userId = useSelector(selectUserId);
    const token = useSelector(selectUserToken);
    const savedRecipeIds = useSelector(selectSavedRecipeIds);
    const [recipe, setRecipe] = useState<RecipeInfoType>({
        id: 0,
        name: '',
        description: '',
        defaultServingSize: 1,
        protein: 0,
        carbs: 0,
        fat: 0,
        instructions: [],
        recipeIngredients: [],
        recipeImages: '',
    });
    const [isSaved, setSavedStatus] = useState(false);
    const [servingSize, setServingSize] = useState(recipe.defaultServingSize);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        getRecipeByName(recipeName, token)
            .then((recipe) => {
                setRecipe(recipe);
                setServingSize(recipe.defaultServingSize);
            })
            .catch((error) => console.log("error", error));

        if (savedRecipeIds != null) {
            // @ts-ignore
            const index = savedRecipeIds.indexOf(parseInt(recipeId));
            const isRecipeSaved = (index === -1) ? false : true;
            setSavedStatus(isRecipeSaved);
        }
        
    }, []);

    const updateServingSize = (updatedAmount: number) => {
        const newAmount = servingSize + updatedAmount;
        if (newAmount === 0 || newAmount === 16) return;

        setServingSize(newAmount);
    }

    const calculateCaloriesForServing = () => {
        const caloriesForProtein = 4;
        const caloriesForCarb = 4;
        const caloriesForFat = 9;

        const { protein, carbs, fat } = recipe;
        return (protein * caloriesForProtein) + (carbs * caloriesForCarb) + (fat * caloriesForFat);
    }

    const handleSaveStatus = async () => {
        if (isSaved) {
            await unsaveRecipeAsync(userId, recipe.id, token);
            const updatedRecipeIds = savedRecipeIds.filter((id) => id !== recipe.id);
            dispatch(setSavedRecipes(updatedRecipeIds));
        } else {
            await saveRecipeAsync(userId, recipe.id, token);
            const recipeIdsCopy = [...savedRecipeIds, recipe.id];
            dispatch(setSavedRecipes(recipeIdsCopy));
        }
        setSavedStatus(!isSaved);
    }

    const {
        id,
        name,
        defaultServingSize,
        protein,
        carbs,
        fat,
        instructions,
        recipeIngredients,
        recipeImages
    } = recipe;
    const caloriesForServing = calculateCaloriesForServing();
    return (
        <Page>
            <Headline>{name}</Headline>
            <Section>
                <RecipeDisplayContainer>
                    <RecipeImageContainer>
                        <RecipeImage
                            src={`https://easymealplanner.s3-us-west-1.amazonaws.com/${id}/${recipeImages[0]?.imageLink}`}
                            alt={`${name}`}
                        />
                        <SaveButton onClick={handleSaveStatus}>
                            {isSaved ? 'Unsave' : 'Save'} Recipe
                        </SaveButton>
                    </RecipeImageContainer>
                </RecipeDisplayContainer>
            </Section>
            <Section>
                <IngredientsContainer>
                    <SectionTitle>Ingredients</SectionTitle>
                    <ServingSizeAdjuster
                        amount={servingSize}
                        handleServingChange={updateServingSize}
                    />
                    <IngredientsList>
                        {recipeIngredients.length > 0 && recipeIngredients.map(r => (
                            <IngredientItem key={`${r.id}${r.ingredient.name}`}>
                                <span>{fracy((r.quantity / defaultServingSize) * servingSize)}</span>
                                <span> {`${r.unit.toLowerCase()}`} of </span>
                                <span>{r.ingredient.name}</span>
                            </IngredientItem>
                        ))}
                    </IngredientsList>
                </IngredientsContainer>
            </Section>
            <Section>
                <DirectionsContainer>
                    <SectionTitle>Directions</SectionTitle>
                    <DirectionsList>
                        {instructions.length > 0 && instructions.map(i => (
                            <DirectionItem key={`${i.id}${i.description}`}>
                                {i.description}
                            </DirectionItem>
                        ))}
                    </DirectionsList>
                </DirectionsContainer>
            </Section>
            <Section>
                <NutrientBreakdownContainer>
                    <SectionTitle>Macronutrient breakdown</SectionTitle>
                    <MacronutrientPieChart
                        protein={protein}
                        carbs={carbs}
                        fat={fat}
                    />
                </NutrientBreakdownContainer>
                <CaloriesText>Calories for one serving: <span>{caloriesForServing}</span></CaloriesText>
            </Section>
        </Page>
    );
}

RecipeDetail.requireAuth = true;

export default RecipeDetail;