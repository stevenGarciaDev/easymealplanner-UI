import Head from 'next/head';
import styled from "styled-components";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

const Page = styled.div`
    font-family: 'Amaranth', sans-serif;
    font-size: 2rem;
    margin-bottom: 100px;
    min-height: 100vh;
`;

const GroceryListTitle = styled.h1`
    display: flex;
    font-family: 'Luckiest Guy', cursive;
    justify-content: center;
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
    background-color: #222;
    border: 1px solid #ccc;
`;

const SectionTitle = styled.h2`
    color: white;
    font-family: 'Amaranth', sans-serif;
    font-size: 3.3rem;
    margin: 10px;
`;

const Item = styled.div`
    align-items: center;
    border: 1px solid #ccc;
    color: #222;
    display: flex;
    font-size: 3rem;
    padding: 5px;
`;

const CheckedIcon = styled(ImCheckboxChecked)`
    color: var(--color-primary);
    cursor: pointer;
    margin-right: 5px;
`;

const UncheckedIcon = styled(ImCheckboxUnchecked)`
    color: var(--color-primary);
    cursor: pointer;
    margin-right: 5px;
`;

const GroceryList = () => (
    <>
        <Head>
            <title>EasyMealPlanner | Grocery List</title>
        </Head>
        <Page>
            <GroceryListTitle>Steven's Grocery List</GroceryListTitle>
            <GroceryListContainer>
                <SectionTitleContainer>
                    <SectionTitle>Herbs and Spices</SectionTitle>
                </SectionTitleContainer>
                <Item><CheckedIcon />Apple</Item>
                <Item><UncheckedIcon />Banana</Item>

                <SectionTitleContainer>
                    <SectionTitle>Baking and Cooking</SectionTitle>
                </SectionTitleContainer>
                <Item><CheckedIcon />Apple</Item>
                <Item><UncheckedIcon />Banana</Item>

                <SectionTitleContainer>
                    <SectionTitle>Dairy</SectionTitle>
                </SectionTitleContainer>
                <Item><CheckedIcon />Apple</Item>
                <Item><UncheckedIcon />Banana</Item>

                <SectionTitleContainer>
                    <SectionTitle>Meat</SectionTitle>
                </SectionTitleContainer>
                <Item><CheckedIcon />Apple</Item>
                <Item><UncheckedIcon />Banana</Item>

                <SectionTitleContainer>
                    <SectionTitle>Beans and Grains</SectionTitle>
                </SectionTitleContainer>
                <Item><CheckedIcon />Apple</Item>
                <Item><UncheckedIcon />Banana</Item>

                <SectionTitleContainer>
                    <SectionTitle>Canned</SectionTitle>
                </SectionTitleContainer>
                <Item><CheckedIcon />Apple</Item>
                <Item><UncheckedIcon />Banana</Item>

                <SectionTitleContainer>
                    <SectionTitle>Condiments</SectionTitle>
                </SectionTitleContainer>
                <Item><CheckedIcon />Apple</Item>
                <Item><UncheckedIcon />Banana</Item>

                <SectionTitleContainer>
                    <SectionTitle>Frozen Foods</SectionTitle>
                </SectionTitleContainer>
                <Item><CheckedIcon />Apple</Item>
                <Item><UncheckedIcon />Banana</Item>

                <SectionTitleContainer>
                    <SectionTitle>Produce</SectionTitle>
                </SectionTitleContainer>
                <Item><CheckedIcon />Apple</Item>
                <Item><UncheckedIcon />Banana</Item>
            </GroceryListContainer>
        </Page>
    </>
);

export default GroceryList;