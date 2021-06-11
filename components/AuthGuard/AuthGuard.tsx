import { useEffect } from "react";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { selectUserToken, selectUserId } from "../../store/user/user.selectors";
import { selectSavedRecipeIds, selectTotalAmountOfRecipes } from "../../store/recipe/recipe.selectors";
import { getSavedRecipes, getTotalNumberOfRecipes } from "../../store/recipe/recipe.actions";

export function AuthGuard({ children }) {
    const userToken = useSelector(selectUserToken);
    const savedRecipes = useSelector(selectSavedRecipeIds);
    const userId = useSelector(selectUserId);
    const totalNumberOfRecipes = useSelector(selectTotalAmountOfRecipes);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userToken === '')
            Router.push('/login');

        if (savedRecipes.length === 0) {
            dispatch(getSavedRecipes(userId, userToken));
        }

        if (totalNumberOfRecipes === 0) {
            dispatch(getTotalNumberOfRecipes(userToken));
        }
    }, []);
    
    return (
        <>
            {userToken && <>{children}</>}
        </>
    );
}