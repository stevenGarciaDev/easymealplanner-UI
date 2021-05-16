import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const Content = styled.div`
    align-items: center;
    display: flex;
`;

const StepNumber = styled.span`
    align-self: flex-start;
    border-radius: 50%;
    border: 1px solid #09090A;
    color: #09090A;
    display: inline-block;
    height: 50px;
    margin-right: 10px;
    min-height: 50px;
    min-width: 50px;
    position: relative;
    top: 12px;
    width: 50px;
`;

const CenterNumber = styled.span`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    top: 7px;
`;

const Text = styled.p`
    font-size: 2.5rem;
`;

const RemoveButton = styled.button`
    background-color: maroon;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 10px;
`;

const RemoveIcon = styled(AiOutlineArrowUp)`
    position: relative;
    top: 2px;
`;

type InstructionProps = {
    stepNumber: number;
    description: string;
    remove(name: string): void;
}

const Instruction = ({ stepNumber, description, remove }: InstructionProps) => {

    const handleRemove = () => {
        remove(description);
    };

    return (
        <>
            <Content>
                <StepNumber>
                    <CenterNumber>{stepNumber}</CenterNumber>
                </StepNumber>
                <Text>
                    {description}
                </Text>
            </Content>
            <RemoveButton onClick={handleRemove} type="button">Remove <RemoveIcon /></RemoveButton>
        </>
    );
};

export default Instruction;