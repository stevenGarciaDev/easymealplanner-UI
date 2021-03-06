import { useState, useEffect } from "react";
import Head from 'next/head';
import styled from "styled-components";
import {
    FormHeadline,
    FormSubheadline,
    AuthForm,
    FormControl,
    Label,
    Input
} from "../shared/styles/forms";
import { Button } from "../shared/styles/buttons";
import { ErrorText } from "../shared/styles/errorText";
import { login, register, setUserErrorMessage} from "../store/user/user.actions";
import { selectUserToken, selectUserErrorMessage } from "../store/user/user.selectors";
import { selectLoadingStatus } from "../store/loading/loading.selector";
import { startLoadingAnimation, stopLoadingAnimation } from "../store/loading/loading.actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";


const Center = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 200px);
    justify-content: center;
    width: 100%;
`;

const DemoButton = styled(Button)`
    background-color: #FF3400;

    &:hover {
        background-color: #d62b00;
    }
`;

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const token = useSelector(selectUserToken);
    const errorMessage = useSelector(selectUserErrorMessage);
    const isLoading = useSelector(selectLoadingStatus);

    useEffect(() => {
        dispatch(setUserErrorMessage(''));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const isValidFormSubmission = () => {
        for (let key in form) {
            if (form[key] === '') return false;
        }
        return true;   
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidFormSubmission()) {
            dispatch(setUserErrorMessage('Please fill in all form fields.'));
            return;
        }
        dispatch(register(form));
    }

    const handleDemoLogin = (e) => {
        e.preventDefault();

        dispatch(login({
            username: 'DemoUser',
            password: 'firstbase'
        }));
    }

    const { username, email, password } = form;
    return (
        <>
            <Head>
                <title>EasyMealPlanners | Sign up</title>
            </Head>
            <Center>
                <FormHeadline>Sign Up</FormHeadline>
                <FormSubheadline>Find delicious recipes and reach your health goals.</FormSubheadline>
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                {isLoading ?
                    <LoadingSpinner />
                    :
                    <AuthForm onSubmit={handleSubmit}>
                        <FormControl>
                            <Label htmlFor="username">Username</Label>
                            <Input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                id="username"
                            />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                id="email"
                            />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                id="password"
                            />
                        </FormControl>
                        <Button type="submit">Let's Eat!</Button>
                        <DemoButton onClick={handleDemoLogin} type="button">Login as Demo User</DemoButton>
                    </AuthForm>
                }
            </Center>
        </>
    );
};

export default SignUp;