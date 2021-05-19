import React from "react";
import styled from "styled-components";
import { Button } from "../../shared/styles/buttons";
import { FcCheckmark } from "react-icons/fc";

const Container = styled.div`
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 0 20px 10px #f3f3f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 440px;
    width: 330px;

    @media screen and (min-width: 1200px) {
        width: 340px;
    }
    
    @media screen and (min-width: 1280px) {
        width: 360px;
    }
`;

type CardHeaderProp = {
    backgroundColor: string;
};

const CardHeader = styled.div<CardHeaderProp>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'dodgerblue'};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: white;
    font-size: 2rem;
    height: 180px;
    margin: 0;
    padding: 20px 35px;
    width: 100%;
`;

const PlanTitle = styled.h2`
    color: white;
    font-size: 2rem;
    margin: 0;
`;

const PlanPrice = styled.h2`
    margin: 15px 0px 0px 0px;

    .cost {
        font-size: 3.5rem;
    }

    .month {
        font-size: 1.8rem;
        margin-left: 5px;
    }
`;

const FeaturesList = styled.ul`
    position: relative;
    left: -20px;
    font-size: 1.7rem;
    margin: 0 auto;
    width: 100%;

    @media screen and (min-width: 400px) {
        font-size: 2rem;
        left: -15px;
    }
`;

const FeatureBenefitItem = styled.li`
    list-style-type: none;
    margin: 15px 0px;
`;

const ItemText = styled.span`
    color: #333;
    margin-left: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const BuyNowButton = styled(Button)`
    background-color: #fff;
    border: 1px solid #111;
    color: #111;
    width: 80%;

    &:hover {
        background-color: var(--color-primary);
        border: none;
        color: white;
    }
`;

const Card = ({ plan, price, subtitle, benefits, backgroundColor }) => {
    return (
        <Container>
            <CardHeader backgroundColor={backgroundColor}>
                <PlanTitle>{plan} Plan</PlanTitle>
                <PlanPrice>
                    <span className="cost">{price}</span>
                    <span className="month">/month</span>
                </PlanPrice>
                <p>{subtitle}</p>
            </CardHeader>
            <FeaturesList>
                {benefits.map((benefit, idx) => {
                    return (
                        <FeatureBenefitItem key={`${benefit}${idx}`}>
                            <FcCheckmark />
                            <ItemText>{benefit}</ItemText>
                        </FeatureBenefitItem>
                    );
                })}
            </FeaturesList>
            <ButtonContainer>
                <BuyNowButton type="button">BUY NOW</BuyNowButton>
            </ButtonContainer>
        </Container>
    );
}

export default Card;