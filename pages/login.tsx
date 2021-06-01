import { useState } from "react";
import Head from 'next/head';
import Router from "next/router";
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
import LoadingSpinner from "../components/LoadingSpinner";
import { useDispatch } from "react-redux";

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        Router.push("/recipes-index");
    }

    const { username, password } = form;
    return (
        <>
            <Head>
                <title>EasyMealPlanner | Login</title>
            </Head>
            <Center>
                {!isLoading ? 
                <>
                    <FormHeadline>Login</FormHeadline>
                    <FormSubheadline>Welcome back, let's get you some food.</FormSubheadline>
                    <AuthForm onSubmit={handleSubmit}>
                        <FormControl>
                            <Label htmlFor="username">User name</Label>
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
                    </AuthForm>
                </>
                : <LoadingSpinner />
                }
            </Center>
        </>
    );
};

export default Login;