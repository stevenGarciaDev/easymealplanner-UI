import { useState } from "react";
import { Center } from "../shared/styles/center";
import { 
    AuthForm,
    FormSubheadline,
    FormControl,
    Label,
    Input
 } from "../shared/styles/forms";
 import { Button } from "../shared/styles/buttons";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { requestToResetPassword } from "../services/userService";

const PageCenter = styled(Center)`
    margin-top: 0;
`;

const SentEmailText = styled(FormSubheadline)`
    align-items: center;
    display: flex;
`;

const CheckIcon = styled(FaCheckCircle)`
    color: var(--color-primary);
    font-size: 4rem;
    margin: 0px 10px;
    position: relative;
    top: -5px;
`;

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [wasEmailSent, updateEmailStatus] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await requestToResetPassword(email);

        updateEmailStatus(true);
    }

    return (
        <Center>
            {wasEmailSent ?
                <>
                    <SentEmailText>
                        <CheckIcon />
                        <span>An email has been sent for you to reset your password.</span>
                    </SentEmailText>
                </>
                :
                <>
                    <FormSubheadline>Recover your username and reset your password.</FormSubheadline>
                    <AuthForm onSubmit={handleSubmit}>
                        <FormControl>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={email}
                                id={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <Button>Send email</Button>
                    </AuthForm>
                </>
            }
        </Center>
    );
}

export default ResetPassword;