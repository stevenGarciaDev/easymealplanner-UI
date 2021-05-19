import { useState } from "react";
import Head from 'next/head';
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
import { connect } from "react-redux";
import { loginUser } from "../store/user/user.actions";

const Login = ({ performLoginUser }) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        performLoginUser();
    }

    const { email, password } = form;
    return (
        <>
            <Head>
                <title>EasyMealPlanner | Login</title>
            </Head>
            <Center>
                <FormHeadline>Login</FormHeadline>
                <FormSubheadline>Welcome back, let's get you some food.</FormSubheadline>
                <AuthForm onSubmit={handleSubmit}>
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
                    <Button type="submit">I'm hungry!</Button>
                </AuthForm>
            </Center>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    performLoginUser: () => dispatch(loginUser())
});

export default connect(null, mapDispatchToProps)(Login);