import TextField from '@material-ui/core/TextField';
import styled from "styled-components";

const Center = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 200px);
    justify-content: center;
    width: 100%;
`;

const FormControl = styled.div`
    margin: 15px 0px;
`;

const AuthForm = styled.form`
    width: 80%;

    @media screen and (min-width: 800px) {
        max-width: 350px;
    }
`;

const Button = styled.button`
    background-color: #1D8F52;
    border-radius: 50px;
    border: 1px solid grey;
    color: white;
    cursor: pointer;
    height: 40px;
    margin: 10px 0px;
    width: 100%;
`;

const SignUp = () => (
    <Center>
        <h1>Sign Up</h1>
        <p>Find delicious recipes and reach your health goals.</p>
        <AuthForm>
            <FormControl>
                <TextField type="text" label="First Name" fullWidth={true} />
            </FormControl>
            <FormControl>
                <TextField type="email" label="Email" fullWidth />
            </FormControl>
            <FormControl>
                <TextField type="password" label="Password" fullWidth />
            </FormControl>
            <Button>Let's Eat!</Button>
        </AuthForm>
    </Center>
);

export default SignUp;