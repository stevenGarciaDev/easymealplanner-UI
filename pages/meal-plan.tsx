import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserName } from "../store/user/user.selectors";
import Head from 'next/head';
import styled from "styled-components";
import MealPlanRecipePreview from "../components/MealPlanRecipePreview";

const Page = styled.div`
    min-height: 100vh;
    padding-bottom: 100px;
`;

const MealPlanTitle = styled.h1`
    font-family: 'Permanent Marker', cursive;
    font-size: 2.8rem;
    text-align: center;
`;

const MealPlanDays = styled.div`
    align-items: center;
    border: 2px solid var(--color-hover);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: 50px;
    justify-items: center;
    padding: 0;
`;

type DayProps = {
    dayOfWeek: number;
    selectedDay: number;
};

const Day = styled.div<DayProps>`
    align-items: center;
    background-color: ${(props) => props.dayOfWeek === props.selectedDay ? "#1D8F52" : "white"};
    border: 1px solid #ccc;
    color: ${(props) => props.dayOfWeek === props.selectedDay ? "white" : "#111"};
    cursor: pointer;
    display: flex;
    font-size: 1.3rem;
    height: 100%;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 600px) {
        font-size: 2rem;
    }
`;

const MealSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MealName = styled.h2`
    font-size: 2.2rem;
    text-align: center;
    border-top: 1px solid #888;
    border-top: 1px solid #888;
    padding: 10px;
`;

const FirstMealName = styled(MealName)`
    margin-top: 0;
`;

const MealPlan = () => {
    const [selectedDay, selectDay] = useState(1);
    const userName = useSelector(selectUserName);

    return (
        <>
            <Head>
                <title>EasyMealPlanner | Meal Plan</title>
            </Head>
            <Page>
                <MealPlanTitle>{`${userName}'s`} Meal Plan</MealPlanTitle>
                <MealPlanDays>
                    <Day
                        dayOfWeek={1}
                        selectedDay={selectedDay}
                        onClick={() => selectDay(1)}
                    >
                        Monday
                    </Day>
                    <Day
                        dayOfWeek={2}
                        selectedDay={selectedDay}
                        onClick={() => selectDay(2)}
                    >
                        Tuesday
                    </Day>
                    <Day
                        dayOfWeek={3}
                        selectedDay={selectedDay}
                        onClick={() => selectDay(3)}
                    >
                        Wednesday
                    </Day>
                    <Day
                        dayOfWeek={4}
                        selectedDay={selectedDay}
                        onClick={() => selectDay(4)}
                    >
                        Thursday
                    </Day>
                    <Day
                        dayOfWeek={5}
                        selectedDay={selectedDay}
                        onClick={() => selectDay(5)}
                    >
                        Friday
                    </Day>

                </MealPlanDays>
                <FirstMealName>Breakfast</FirstMealName>
                <MealSection>
                    
                    <MealPlanRecipePreview />
                </MealSection>
                <MealName>Lunch</MealName>
                <MealSection>
                    
                    <MealPlanRecipePreview />
                </MealSection>
                <MealName>Dinner</MealName>
                <MealSection>
                    
                    <MealPlanRecipePreview />
                </MealSection>
                <MealName>Snacks</MealName>
                <MealSection>
                    
                    <MealPlanRecipePreview />
                </MealSection>
            </Page>
        </>
    );
};

MealPlan.requireAuth = true;

export default MealPlan;