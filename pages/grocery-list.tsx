import { useSelector } from "react-redux";
import { selectUserName } from "../store/user/user.selectors";
import Head from 'next/head';
import styled from "styled-components";
import GroceryListItem from "../components/GroceryListItem";


const Page = styled.div`
    font-family: 'Amaranth', sans-serif;
    font-size: 2rem;
    margin-bottom: 100px;
    min-height: 100vh;
`;

const GroceryListTitle = styled.h1`
    display: flex;
    font-family: 'Permanent Marker', cursive;
    font-size: 2rem;
    justify-content: center;
    text-align: center;

    @media screen and (min-width: 600px) {
        font-size: 3rem;
    }
`;

const Subheadline = styled.h2`
    color: grey;
    font-size: 1.9rem;
    font-style: italic;
    text-align: center;
`;

const GroceryListContainer = styled.div`
    border: 2px solid darkgray;
    border-radius: 5px;
    margin: 0 auto;

    @media screen and (min-width: 600px) {
        width: 80%;
    }

    @media screen and (min-width: 1400px) {
        width: 50%;
    }
`;

const SectionTitleContainer = styled.div`
    background-color: #3e3e3e;
    border: 1px solid #ccc;
`;

const SectionTitle = styled.h2`
    color: white;
    font-family: 'Amaranth', sans-serif;
    font-size: 2.7rem;
    margin: 10px;
`;

const GroceryList = () => {
    const userName = useSelector(selectUserName);

    return (
        <>
            <Head>
                <title>EasyMealPlanners | Grocery List</title>
            </Head>
            <Page>
                <GroceryListTitle>{`${userName}'s`} Grocery List</GroceryListTitle>
                <Subheadline>Generated based on your meal plan.</Subheadline>
                <GroceryListContainer>
                    <SectionTitleContainer>
                        <SectionTitle>Herbs and Spices</SectionTitle>
                    </SectionTitleContainer>
                    <GroceryListItem isChecked={false} name="Apple" />
                    <GroceryListItem isChecked={true} name="Banana" />

                    <SectionTitleContainer>
                        <SectionTitle>Baking and Cooking</SectionTitle>
                    </SectionTitleContainer>
                    <GroceryListItem isChecked={false} name="Apple" />
                    <GroceryListItem isChecked={true} name="Banana" />

                    <SectionTitleContainer>
                        <SectionTitle>Dairy</SectionTitle>
                    </SectionTitleContainer>
                    <GroceryListItem isChecked={false} name="Apple" />
                    <GroceryListItem isChecked={true} name="Banana" />

                    <SectionTitleContainer>
                        <SectionTitle>Meat</SectionTitle>
                    </SectionTitleContainer>
                    <GroceryListItem isChecked={false} name="Apple" />
                    <GroceryListItem isChecked={true} name="Banana" />

                    <SectionTitleContainer>
                        <SectionTitle>Beans and Grains</SectionTitle>
                    </SectionTitleContainer>
                    <GroceryListItem isChecked={false} name="Apple" />
                    <GroceryListItem isChecked={true} name="Banana" />

                    <SectionTitleContainer>
                        <SectionTitle>Canned</SectionTitle>
                    </SectionTitleContainer>
                    <GroceryListItem isChecked={false} name="Apple" />
                    <GroceryListItem isChecked={true} name="Banana" />

                    <SectionTitleContainer>
                        <SectionTitle>Condiments</SectionTitle>
                    </SectionTitleContainer>
                    <GroceryListItem isChecked={false} name="Apple" />
                    <GroceryListItem isChecked={true} name="Banana" />

                    <SectionTitleContainer>
                        <SectionTitle>Frozen Foods</SectionTitle>
                    </SectionTitleContainer>
                    <GroceryListItem isChecked={false} name="Apple" />
                    <GroceryListItem isChecked={true} name="Banana" />

                    <SectionTitleContainer>
                        <SectionTitle>Produce</SectionTitle>
                    </SectionTitleContainer>
                    <GroceryListItem isChecked={false} name="Apple" />
                    <GroceryListItem isChecked={true} name="Banana" />
                </GroceryListContainer>
            </Page>
        </>
    );
};

GroceryList.requireAuth = true;

export default GroceryList;