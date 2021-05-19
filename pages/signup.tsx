import { useState } from "react";
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

const Center = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 200px);
    justify-content: center;
    width: 100%;
`;

const SignUp = () => {
    const [form, setForm] = useState({
        firstName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const { firstName, email, password } = form;
    return (
        <>
            <Head>
                <title>EasyMealPlanner | Sign up</title>
            </Head>
            <Center>
                <FormHeadline>Sign Up</FormHeadline>
                <FormSubheadline>Find delicious recipes and reach your health goals.</FormSubheadline>
                <AuthForm>
                    <FormControl>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={handleChange}
                            id="firstName"
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
                </AuthForm>
            </Center>
        </>
    );
};

export default SignUp;