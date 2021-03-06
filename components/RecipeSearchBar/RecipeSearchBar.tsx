import React from 'react';
import styled from 'styled-components';
import { MdSearch, MdClose } from "react-icons/md";
import { getTotalNumberOfRecipesContainingTextAsync } from '../../services/recipeService';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../../store/user/user.selectors';

const Container = styled.div`
    display: flex;
    font-size: 2.5rem;
    justify-content: center;
    position: absolute;
    top: 10px;
    width: 100%;
    @media screen and (min-width: 1000px) {
        width: 80%;
        left: 50px;
        top: 50px;
        justify-content: flex-start;
    }
`;

const SearchContainer = styled.div`
    left: -20px;
    position: relative;
    width: 80%;
    z-index: 2;
`;

const Icon = styled(MdSearch)`
    color: #767676;
    font-size: 25px !important;
    left: 8px;
    position: absolute;
    top: 18px;
    z-index: 2;
`;

const Input = styled.input`
    background-color: #EEEEEE;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 20px;
    height: 60px;
    margin-right: 35px;
    outline: none;
    padding-left: 35px;
    position: relative;
    width: 100%;
`;

const SearchButton = styled.div`
    align-items: center;
    background-color: var(--color-primary);
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid var(--color-primary);
    color: white;
    display: flex;
    height: 60px;
    justify-content: center;
    position: absolute;
    right: -40px;
    top: 0;
    width: 100px;
    &:hover {
        background-color: var(--color-hover);
        cursor: pointer;
    }
    @media screen and (min-width: 1000px) {
        width: 120px;
    }
`;

const DeleteTextIcon = styled(MdClose)`
    color: gray;
    position: absolute;
    top: 18px;
    right: 65px;
    &:hover {
        cursor: pointer;
    }
    @media screen and (min-width: 1000px) {
        right: 90px;
    }
`;

type RecipeSearchbBarProps = {
    searchText: string;
    setSearchText: (text: string) => void;
    displaySearchResults: (status: boolean) => void;
    setRecipeAmountBasedOnSearch: (amount: number) => void;
    setPageNumber: (pageNumber: number) => void;
};

const RecipeSearchBar = ({
    searchText,
    setSearchText,
    displaySearchResults,
    setRecipeAmountBasedOnSearch,
    setPageNumber
}: RecipeSearchbBarProps) => {
    const userToken = useSelector(selectUserToken);

    const doesInputContainText = () => {
        return (searchText !== null && searchText.length > 0) ? true : false;
    }

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchText(value);

        if (value === '') {
            clearText(event);
        }
    }

    const clearText = (event) => {
        setSearchText("");
        displaySearchResults(false);
        setPageNumber(0);
    }

    const handleSubmitQuery = async () => {
        if (!doesInputContainText()) return;

        const totalMatching = await getTotalNumberOfRecipesContainingTextAsync(searchText, userToken);
        setRecipeAmountBasedOnSearch(totalMatching);

        setPageNumber(0);
        
        displaySearchResults(true);
    }

    return (
        <Container>
            <SearchContainer>
                <div><Icon /></div>
                <Input 
                    type="text" 
                    name="recipeName" 
                    placeholder="Search for Recipe Name" 
                    value={searchText}
                    onChange={handleChange}
                />
                <SearchButton onClick={handleSubmitQuery}>Search</SearchButton>
                { doesInputContainText() && <DeleteTextIcon onClick={clearText} /> }
            </SearchContainer>
        </Container>
    );
}

export default RecipeSearchBar;