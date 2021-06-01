import { useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../store/user/user.selectors";

export function NoDuplicateAuthGuard({ children }) {
    const userToken = useSelector(selectUserToken);

    useEffect(() => {
        if (userToken != '')
            Router.push('/recipes-index');
    });
    
    return (
        <>
            {userToken === '' && <>{children}</>}
        </>
    );
}