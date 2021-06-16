import { useEffect } from "react";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { selectUserToken, selectUserId } from "../../store/user/user.selectors";
import { selectSavedRecipeIds } from "../../store/recipe/recipe.selectors";
import { getSavedRecipes, getTotalNumberOfRecipes } from "../../store/recipe/recipe.actions";
import { getMealPlanIdBasedOnUser, getMealPlanByUserId } from "../../store/meal-plan/meal-plan.actions";

export function AuthGuard({ children }) {
    const userToken = useSelector(selectUserToken);
    const savedRecipes = useSelector(selectSavedRecipeIds);
    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userToken === '')
            Router.push('/login');
        
        dispatch(getTotalNumberOfRecipes(userToken));
        dispatch(getMealPlanIdBasedOnUser(userId, userToken));
        dispatch(getMealPlanByUserId(userId, userToken));
        
        if (savedRecipes.length === 0) {
            dispatch(getSavedRecipes(userId, userToken));
        }
    }, []);
    
    return (
        <>
            {userToken && <>{children}</>}
        </>
    );
}