import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  Container,
  ImageLink,
  ImageContainer,
  TextContainer,
  TextContent,
  Icon
} from "../../shared/styles/recipePreview";

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