import styled from "styled-components";
import { AuthForm, FormControl } from "../shared/styles/forms";
import { Center } from "../shared/styles/center";
import { Button } from "../shared/styles/buttons";

const Login = () => (
    <Center>
        <h1>Login</h1>
        <p>Welcome back, let's get you some food.</p>
        <AuthForm>
            <FormControl>
                <input type="email" name="email" />
            </FormControl>
            <FormControl>
                <input type="password" name="password" />
            </FormControl>
            <Button>I'm hungry!</Button>
        </AuthForm>
    </Center>
)

export default Login;