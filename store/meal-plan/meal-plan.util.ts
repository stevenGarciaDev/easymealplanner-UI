export const initializeMealPlanStructure = (mealPlanRecipes) => {
    const amountOfRecipesInDay = 4;
    let mealPlanHashTable = {
        'MONDAY': new Array(amountOfRecipesInDay).fill(null),
        'TUESDAY': new Array(amountOfRecipesInDay).fill(null),
        'WEDNESDAY': new Array(amountOfRecipesInDay).fill(null),
        'THURSDAY': new Array(amountOfRecipesInDay).fill(null),
        'FRIDAY': new Array(amountOfRecipesInDay).fill(null),
    };

    mealPlanRecipes.forEach((recipe) => {
        const dayOfTheWeek = recipe.dayOfTheWeek;
        const mealOfTheDayNumber = recipe.mealOfTheDayNumber;

        mealPlanHashTable[dayOfTheWeek][mealOfTheDayNumber] = recipe;
    });

    return mealPlanHashTable;
}

export const updateMealPlan = (mealPlan, recipe) => {
    const dayOfTheWeek = recipe.dayOfTheWeek;
    const mealOfTheDayNumber = recipe.mealOfTheDayNumber;

    mealPlan[dayOfTheWeek][mealOfTheDayNumber] = recipe;
    return mealPlan;
}