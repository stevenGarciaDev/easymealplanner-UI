import { useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../store/user/user.selectors";

export function AuthGuard({ children }) {
    const userToken = useSelector(selectUserToken);

    useEffect(() => {
        if (userToken === '')
            Router.push('/login');
    });
    
    return (
        <>
            {userToken && <>{children}</>}
        </>
    );
}