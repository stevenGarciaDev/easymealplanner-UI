import styled from "styled-components";
import { Label } from "../../shared/styles/forms";
import {
    Container,
    InputContainer,
    Input,
    Select,
    FormControl
} from "../../shared/styles/horizontalFormInputFields";

const NutrientInputContainer = styled(InputContainer)`
    @media screen and (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

type MacroNutrientInputType = {
    handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
    protein: number;
    carbs: number;
    fat: number
}

const MacroNutrientInput = ({
    handleInputChange,
    protein,
    carbs,
    fat
}: MacroNutrientInputType) => {

    const handleChange = (e) => {
        const { value } = e.target;

        if (value < 0 || value > 200) {
            return;
        }

        handleInputChange(e);
    }

    return (
        <Container>
            <NutrientInputContainer>
                <FormControl>
                    <Label htmlFor="protein">Protein (grams)</Label>
                    <Input
                        type="number"
                        name="protein"
                        value={protein}
                        onChange={handleChange}
                        id="protein"
                        min={0}
                        max={200}
                    />
                </FormControl>
                <FormControl>
                    <Label htmlFor="carbs">Carbs (grams)</Label>
                    <Input
                        type="number"
                        name="carbs"
                        value={carbs}
                        onChange={handleChange}
                        id="carbs"
                        min={0}
                        max={200}
                    />
                </FormControl>
                <FormControl>
                    <Label htmlFor="fat">Fat (grams)</Label>
                    <Input
                        type="number"
                        name="fat"
                        value={fat}
                        onChange={handleChange}
                        id="fat"
                        min={0}
                        max={200}
                    />
                </FormControl>
            </NutrientInputContainer>
        </Container>
    );
}

export default MacroNutrientInput;