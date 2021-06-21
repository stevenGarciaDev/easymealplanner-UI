import { useState, useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';
import { Center } from "../shared/styles/center";
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
import { setUserErrorMessage, login } from "../store/user/user.actions";
import { selectUserErrorMessage } from "../store/user/user.selectors";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ResetLink = styled.a`
    color: dodgerblue;
    cursor: pointer;
    font-size: 1.8rem;
    margin-top: 10px;
    text-decoration: underline;
`;

const DemoButton = styled(Button)`
    background-color: #FF3400;

    &:hover {
        background-color: #d62b00;
    }
`;

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const errorMessage = useSelector(selectUserErrorMessage);
    const dispatch = useDispatch();

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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isValidFormSubmission()) {
            dispatch(setUserErrorMessage('Please fill in all form fields.'));
            return;
        }
        dispatch(login(form));
    }

    const handleDemoLogin = (e) => {
        e.preventDefault();

        dispatch(login({
            username: 'DemoUser',
            password: 'firstbase'
        }));
    }

    const { username, password } = form;
    return (
        <>
            <Head>
                <title>EasyMealPlanners | Login</title>
            </Head>
            <Center>
                <FormHeadline>Login</FormHeadline>
                <FormSubheadline>Welcome back, let's get you some food.</FormSubheadline>
                {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
                <AuthForm onSubmit={handleSubmit}>
                    <FormControl>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="username"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            id="username"
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
                    <Button type="submit">I'm hungry!</Button>
                    <DemoButton onClick={handleDemoLogin} type="button">Login as Demo User</DemoButton>
                </AuthForm>
                <Link href='/reset-password'>
                    <ResetLink>Forgot username or password?</ResetLink>
                </Link>
            </Center>
        </>
    );
};

export default Login;