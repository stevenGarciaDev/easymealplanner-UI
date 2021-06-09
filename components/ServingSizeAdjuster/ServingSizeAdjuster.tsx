import styled from "styled-components";

const ServingSizeContainer = styled.div`
    text-align: center;
`;

const ServingTitle = styled.h2`

`;

const AdjusterContainer = styled.div`
    border: 1px solid #222;
    display: flex;
    font-size: 2rem;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    width: 100px;
`;

const DecrementServingSize = styled.div`
    cursor: pointer;
`;

const IncrementServingSize = styled.div`
    cursor: pointer;
`;

const ServingSizeAdjuster = ({ amount, handleServingChange }) => {
    return (
        <ServingSizeContainer>
            <ServingTitle>Serving Size</ServingTitle>
            <AdjusterContainer>   
                <DecrementServingSize onClick={() => handleServingChange(-1)}>-</DecrementServingSize>
                <div>{amount}</div>
                <IncrementServingSize onClick={() => handleServingChange(1)}>+</IncrementServingSize>
            </AdjusterContainer>
        </ServingSizeContainer>
    );
}

export default ServingSizeAdjuster;