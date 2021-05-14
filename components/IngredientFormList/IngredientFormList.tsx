import { Ingredient } from "../../shared/types/Ingredient";
import { IoMdCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";

const IngredientItem = styled.div`
    border-radius: 5px;
    border: 1px solid #111;
    display: inline-block;
    margin: 5px 5px 0px 0px;
    padding: 5px;
`;

const ItemContent = styled.div`
    align-items: center;
    display: flex;
`;

const RemoveIcon = styled(IoMdCloseCircleOutline)`
    cursor: pointer;
    margin-left: 5px;
`;

type IngredientFormListProps = {
    ingredients: Ingredient[];
    removeIngredient(name: string): void;
}

const IngredientFormList = ({ ingredients, removeIngredient }: IngredientFormListProps) => {
    return (
        <div>
            {ingredients.map(({ ingredientName, quantity, unit }) => {
                return (
                    <IngredientItem key={ingredientName}>
                        <ItemContent>
                            {`${quantity} ${unit} of ${ingredientName}`}
                            <RemoveIcon onClick={() => removeIngredient(ingredientName) } />
                        </ItemContent>
                    </IngredientItem>
                )
            })}
        </div>
    );
};

export default IngredientFormList;