import { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0px 100px 0px;
`;

const PageButton = styled.button`
    align-items: center;
    background-color: white;
    border-radius: 5px;
    border: 1px solid grey;
    color: #11562f;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    justify-content: center;
    margin: 0 5px;
    padding: 10px;
    width: 100px;
`;

const CurrentPageButton = styled(PageButton)`
    cursor: auto;
    width: 80px;
`;

type LeftPageButtonProps = {
    currentPage: number;
}

const LeftPageButton = styled(PageButton)<LeftPageButtonProps>`
    display: ${(props) => props.currentPage === 0 ? 'none' : 'flex'};
`;

type RightPageButtonProps = {
    currentPage: number;
    maxPageNumber: number;
}

const RightPageButton = styled(PageButton)<RightPageButtonProps>`
    display: ${(props) => (props.currentPage < props.maxPageNumber - 1) ? 'flex' : 'none'};
`;

export const PaginatedPageNumber = ({ currentPage, updatePage, totalNumberOfRecipes, recipesPerPage }) => {

    const handleClick = (direction: string) => {
        if (currentPage === 0 && direction === 'left') return;
        if (direction === 'left') {
            updatePage(currentPage - 1);
        } else {
            updatePage(currentPage + 1);
        }
    }

    const calculateLastPageNumber = () => {
        const remainingPageToAdd = (totalNumberOfRecipes % recipesPerPage > 0) ? 1 : 0;
        const lastPage = Math.floor(totalNumberOfRecipes / recipesPerPage) +  remainingPageToAdd;
        return lastPage;
    }

    const lastPageNumber = calculateLastPageNumber();
    return (
        <Container>
            <LeftPageButton
                onClick={() => handleClick("left")}
                type="button"
                currentPage={currentPage}
            >
                <span>Previous</span>
                <AiOutlineArrowLeft />
            </LeftPageButton>
            <CurrentPageButton
                type="button"
            >
                    {currentPage + 1}
            </CurrentPageButton>
            <RightPageButton
                onClick={() => handleClick("right")}
                type="button"
                currentPage={currentPage}
                maxPageNumber={lastPageNumber}
            >
                <span>Next</span>
                <AiOutlineArrowRight />
            </RightPageButton>
        </Container>
    );
}