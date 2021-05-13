import TextField from '@material-ui/core/TextField';
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
                <TextField type="email" label="Email" fullWidth />
            </FormControl>
            <FormControl>
                <TextField type="password" label="Password" fullWidth />
            </FormControl>
            <Button>I'm hungry!</Button>
        </AuthForm>
    </Center>
)

export default Login;