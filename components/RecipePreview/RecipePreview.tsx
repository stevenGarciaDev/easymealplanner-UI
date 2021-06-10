import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipePreview = ({
  id,
  name,
  imageLink,
  saved = false,
  saveRecipe,
  unsaveRecipe
}) => {
  const [isSaved, setStatus] = useState(saved);

  const handleClick = async () => {
    if (isSaved) {
      unsaveRecipe(id);
    } else {
      saveRecipe(id);
    }
    setStatus(!isSaved);
  }

  return (
    <Container>
      <Link href={`/recipe-detail/${id}/${name}`} passHref>
        <ImageContainer
            src={`https://easymealplanner.s3-us-west-1.amazonaws.com/${id}/${imageLink}`}
            alt={name}
        />
      </Link>
      <TextContainer>
        <TextContent>
          <p>{name}</p>
          <Icon onClick={handleClick}>
            {isSaved ? <FaHeart /> : <FaRegHeart />}
          </Icon>
        </TextContent>
      </TextContainer>
    </Container>
  );
}

export default RecipePreview;

export const Container = styled.div`
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 300px;
  min-width: 300px;
  width: 100%;
  z-index: 2;
`;

const ImageLink = styled(Link)`
  height: 80%;
`;

const ImageContainer = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  height: 300px;
  object-fit: cover;
  width: 100%;
`;

const TextContainer = styled.div`
  border-top: 1px solid #ccc;
  height: 75px;
  width: 100%;
`;

const TextContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-family: 'Amaranth', sans-serif;
  font-size: 25px;
  justify-content: space-between;
  margin: 0px 10px;
  position: relative;
`;

const Icon = styled.div`
  color: #5f9f3d;
  cursor: pointer;
  height: 100%;
`;